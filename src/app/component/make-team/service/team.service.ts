import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIUrl } from "src/app/config/api.url";
import { MemberWithAvgDto } from "src/app/dto/team/memberWithAvg.dto";
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
}
