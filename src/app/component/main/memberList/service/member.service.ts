import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { APIUrl } from "src/app/config/api.url";
import { CreateRequestDto } from "src/app/dto/member/createRequest.dto";
import { MemberDto } from "src/app/dto/member/member.dto";
import { AccountService } from "src/app/service/account.service";

@Injectable()
export class MemberService {
    constructor(private httpClient: HttpClient, private accountService: AccountService, private router: Router) {}

    public getMemberList(): Observable<MemberDto[]> {
        return new Observable<MemberDto[]>(observer => {
            if (this.accountService.accountSeq == undefined) {
                this.router.navigateByUrl("/");
            } else {
                this.httpClient.get<MemberDto[]>(APIUrl.MEMBER_LIST(this.accountService.accountSeq)).subscribe(
                    response => {
                        observer.next(response);
                    },
                    error => {
                        this.router.navigateByUrl("/");
                    }
                )
            }
        });
    }

    public addMember(member: MemberDto): Observable<number> {
        let request: CreateRequestDto = new CreateRequestDto();
        request.accountSeq = this.accountService.accountSeq;
        request.name = member.name;
        request.gender = member.gender;

        return new Observable<number>(observer => {
            this.httpClient.post(APIUrl.MEMBER, request, {observe: "response"}).subscribe(
                response => {
                    observer.next(response.status);
                },
                error => {
                    observer.next(error.status);
                }
            );
        });
    }

    public editMember(member: MemberDto): Observable<number> {
        return new Observable<number>(observer => {
            this.httpClient.put(APIUrl.SPECIFIC_MEMBER(member.seq), member, {observe: "response"}).subscribe(
                response => {
                    observer.next(response.status);
                },
                error => {
                    observer.next(error.status);
                }
            );
        });
    }

    public deleteMember(member: MemberDto): Observable<number> {
        return new Observable<number>(observer => {
            this.httpClient.delete(APIUrl.SPECIFIC_MEMBER(member.seq), {observe: "response"}).subscribe(
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
