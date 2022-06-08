import { Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { HTTPStatus } from "src/app/config/http.status";
import { MenuCode } from "src/app/const/menu.code";
import { MemberWithAvgDto } from "src/app/dto/team/memberWithAvg.dto";
import { TeamDto } from "src/app/dto/team/team.dto";
import { MenuService } from "src/app/service/menu.service";
import { TeamService } from "./service/team.service";

@Component({
    selector: "make-team",
    templateUrl: "./view/make-team.component.html",
    providers: [TeamService]
})
export class MakeTeamComponent {
    @ViewChildren("checkBox") private checkBoxList!: QueryList<ElementRef>;

    public memberList: MemberWithAvgDto[] = [];
    public teamCount: number = 3;
    public teamList: TeamDto[] = [];

    constructor(private teamService: TeamService, private menuService: MenuService) {
        this.searchMember();
        this.createTeam();
        this.checkFirstTeam();
    }

    private searchMember(): void {
        this.teamService.getMemberList().subscribe(
            response => {
                this.memberList = [];

                for (let i = 0; i < response.length; i++) {
                    let member: MemberWithAvgDto = Object.assign(new MemberWithAvgDto(), response[i]);
                    this.memberList.push(member);
                }
            }
        );
    }

    private createTeam(): void {
        for (let i = 0; i < this.teamCount; i++) {
            let team: TeamDto = new TeamDto();
            this.teamList.push(team);
        }
    }

    private checkFirstTeam(): void {
        this.teamList.forEach(
            team => {
                team.isChecked = false;
            }
        );

        this.teamList[0].isChecked = true;
    }

    public changeTeamCount(event: Event): void {
        let selectElement: HTMLSelectElement = event.target as HTMLSelectElement;
        this.teamCount = parseInt(selectElement.value);

        if (this.teamList.length != this.teamCount) {
            this.syncTeamCount();
        }
    }

    private syncTeamCount(): void {
        if (this.teamList.length > this.teamCount) {
            let diff: number = this.teamList.length - this.teamCount;

            for (let i = 0; i < diff; i++) {
                this.teamList.splice(this.teamList.length - 1, 1);
            }
        } else {
            let diff: number = this.teamCount - this.teamList.length;

            for (let i = 0; i < diff; i++) {
                let team: TeamDto = new TeamDto();
                this.teamList.push(team);
            }
        }

        this.checkFirstTeam();
    }

    public selectTeam(teamIndex: number): void {
        this.teamList.forEach(
            (team: TeamDto, index: number) => {
                let inputElement: HTMLInputElement = this.checkBoxList.get(index).nativeElement as HTMLInputElement;

                if (teamIndex == index) {
                    team.isChecked = true;
                    inputElement.checked = true;
                } else {
                    team.isChecked = false;
                    inputElement.checked = false;
                }
            }
        );
    }

    public selectMember(selectedMember: MemberWithAvgDto): void {
        if (selectedMember.teamIndex > -1) {
            let team: TeamDto = this.teamList[selectedMember.teamIndex];

            for (let i = 0; i < team.memberList.length; i++) {
                if (team.memberList[i].seq == selectedMember.seq) {
                    selectedMember.teamIndex = -1;
                    team.memberList.splice(i, 1);

                    break;
                }
            }
        } else {
            this.teamList.forEach(
                (team: TeamDto, index: number) => {
                    if (team.isChecked) {
                        team.memberList.push(selectedMember);
                        selectedMember.teamIndex = index;
                    }
                }
            );
        }
    }

    public save(): void {
        if (!this.isValid()) {
            alert("팀원이 없는 팀이 존재합니다.");
            return;
        }

        this.teamService.saveTeam(this.teamList).subscribe(
            response => {
                if (response == HTTPStatus.OK) {
                    alert("팀을 생성하였습니다.");
                    this.menuService.changeMenu(MenuCode.MAIN);
                }
            }
        );
    }

    private isValid(): boolean {
        let isValid: boolean = true;

        this.teamList.forEach(
            team => {
                if (team.memberList.length == 0) {
                    isValid = false;
                    return;
                }
            }
        );

        return isValid;
    }
}