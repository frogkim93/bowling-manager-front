import { Component } from "@angular/core";
import { MenuCode } from "src/app/const/menu.code";
import { TeamDto } from "src/app/dto/team/team.dto";
import { MenuService } from "src/app/service/menu.service";
import { RecentTeamService } from "./service/recent-team.service";

@Component({
    selector: "recent-team",
    templateUrl: "./view/recent-team.component.html",
    providers: [RecentTeamService]
})
export class RecentTeamComponent {
    public teamList: TeamDto[] = [];

    constructor(private recentTeamService: RecentTeamService, private menuSerivce: MenuService) {
        this.getRecentTeam();
    }

    private getRecentTeam(): void {
        this.recentTeamService.getRecentTeam().subscribe(
            response => {
                this.teamList = [];

                for (let i = 0; i < response.length; i++) {
                    let team = Object.assign(new TeamDto(), response[i]);
                    this.teamList.push(team);
                }
            }
        );
    }

    public goToRecord(): void {
        this.menuSerivce.changeMenu(MenuCode.RECORD);
    }
}