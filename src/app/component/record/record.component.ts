import { Component } from "@angular/core";
import { RecentTeamService } from "../main/recent-team/service/recent-team.service";

@Component({
    selector: "record",
    templateUrl: "./view/record.component.html",
    providers: [RecentTeamService]
})
export class RecordComponent {
    constructor(private recentTeamService: RecentTeamService) {
        this.getRecentTeam();
    }

    public getRecentTeam(): void {
        this.recentTeamService.getRecentTeam().subscribe(
            response => {
                console.log(response);
            }
        )
    }
}