import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { MenuCode } from "src/app/const/menu.code";
import { RecordDto } from "src/app/dto/record/record.dto";
import { TeamDto } from "src/app/dto/team/team.dto";
import { MenuService } from "src/app/service/menu.service";
import { RecentTeamService } from "../main/recent-team/service/recent-team.service";
import { RecordService } from "./service/record.service";

@Component({
    selector: "record",
    templateUrl: "./view/record.component.html",
    providers: [RecentTeamService, RecordService]
})
export class RecordComponent {
    @ViewChildren("scoreElement") private scoreElementList!: QueryList<ElementRef>;
    public record!: RecordDto.Record;
    private teamList: TeamDto[] = [];
    public gameCount!: number;
    public scoreList: number[][] = [];

    constructor(private recentTeamService: RecentTeamService, private recordService: RecordService, private menuService: MenuService) {
        this.gameCount = 3;
        this.getRecentTeam();
    }

    public getRecentTeam(): void {
        this.recentTeamService.getRecentTeam().subscribe(
            response => {
                this.teamList = response;
                this.record = new RecordDto.Record();
                this.record.init(this.teamList, this.gameCount);

                this.teamList = [];

                for (let i = 0; i < response.length; i++) {
                    this.teamList.push(Object.assign(new TeamDto(), response[i]));
                }
            }
        );
    }

    public changeGameCount(event: Event): void {
        let element: HTMLSelectElement = event.target as HTMLSelectElement;
        this.gameCount = parseInt(element.value);

        this.record.init(this.teamList, this.gameCount);
    }

    public save(): void {
        let cnt: number = 0;
        let isValid: boolean = true;

        for (let i = 0; i < this.record.teamList.length; i++) {
            let team: RecordDto.Team = this.record.teamList[i];

            for (let j = 0; j < team.memberList.length; j++) {
                let member: RecordDto.Member = team.memberList[j];

                for (let k = 0; k < this.gameCount; k++) {
                    let element: HTMLInputElement = this.scoreElementList.get(cnt).nativeElement as HTMLInputElement;

                    if (element.value == "") {
                        isValid = false;
                        break;
                    }

                    member.scoreList[k] = (parseInt(element.value));
                    cnt++;
                }

                if (!isValid) {
                    break;
                }
            }

            if (!isValid) {
                break;
            }
        }

        if (!isValid) {
            alert("빈 데이터를 확인해주세요.");
        } else {
            this.recordService.record(this.record).subscribe(
                response => {
                    this.menuService.changeMenu(MenuCode.MAIN);
                }
            );
        }
    }
}