import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { APIUrl } from "src/app/config/api.url";
import { AccountDto } from "src/app/dto/login/account.dto";
import { LoginDto } from "src/app/dto/login/login.dto";
import { PublicKeyDto } from "src/app/dto/login/publicKey.dto";
import { AccountService } from "src/app/service/account.service";
import { RSAUtil } from "src/app/utils/rsa.util";

@Injectable()
export class LoginService {
    constructor(private httpClient: HttpClient, private accountService: AccountService, private router: Router) {}

    public checkLogin(): void {
        let seq: string | null = localStorage.getItem("seq");

        if (seq != null) {
            this.accountService.accountSeq = parseInt(seq);
            this.router.navigateByUrl("main");
        }
    }

    public auth(loginRequest: LoginDto): Observable<number> {
        return new Observable<number>(observer => {
            this.httpClient.get<PublicKeyDto>(APIUrl.PUBLICKEY).subscribe(
                response => {
                    let rsaUtil: RSAUtil = RSAUtil.getInstance();
                    let encryptedPassword: string = rsaUtil.encrypt(response.key, loginRequest.password);

                    let request: LoginDto = Object.assign(new LoginDto(), loginRequest);
                    request.password = encryptedPassword;

                    this.httpClient.post<AccountDto>(APIUrl.LOGIN, request, {observe: 'response'}).subscribe(
                        response => {
                            this.accountService.accountSeq = response.body.seq;
                            localStorage.setItem("seq", response.body.seq.toString());
                            this.router.navigateByUrl("main");
                        },
                        error => {
                            observer.next(error.status);
                        }
                    );
                }, error => {
                    observer.next(error.status);
                }
            );
        });
    }
}