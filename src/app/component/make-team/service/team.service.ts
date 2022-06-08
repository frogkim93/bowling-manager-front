import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIUrl } from "src/app/config/api.url";
import { CreateRequestDto } from "src/app/dto/team/create/createRequest.dto";
import { MemberWithAvgDto } from "src/app/dto/team/memberWithAvg.dto";
import { TeamDto } from "src/app/dto/team/team.dto";
import { AccountService } from "src/app/service/account.service";

@Injectable()
export class TeamService {
    constructor(private httpClient: HttpClient, private accountService: AccountService) {}

    public getMemberList(): Observable<MemberWithAvgDto[]> {
        return new Observable<MemberWithAvgDto[]>(observer => {
            this.httpClient.get<MemberWithAvgDto[]>(APIUrl.MEMBER_WITH_AVG_LIST(this.accountService.accountSeq)).subscribe(
                response => {
                    observer.next(response);
                }
            )
        });
    }

    public saveTeam(teamList: TeamDto[]): Observable<number> {
        return new Observable<number>(observer => {
            let request: CreateRequestDto.Request = new CreateRequestDto.Request(teamList);

            this.httpClient.post<HttpResponse<void>>(APIUrl.TEAM, request.teamList, {observe: "response"}).subscribe(
                response => {
                    observer.next(response.status);
                },
                error => {
                    observer.next(error.status);
                }
            );
        });
    }
}
