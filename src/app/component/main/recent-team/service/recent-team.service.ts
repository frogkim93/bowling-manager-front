import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIUrl } from "src/app/config/api.url";
import { TeamDto } from "src/app/dto/team/team.dto";
import { AccountService } from "src/app/service/account.service";

@Injectable()
export class RecentTeamService {
    constructor(private httpClient: HttpClient, private accountService: AccountService) {}

    public getRecentTeam(): Observable<TeamDto[]> {
        return new Observable<TeamDto[]>(observer => {
            this.httpClient.get<TeamDto[]>(APIUrl.RECENT_TEAM(this.accountService.accountSeq)).subscribe(
                response => {
                    observer.next(response);
                }
            );
        });
    }
}