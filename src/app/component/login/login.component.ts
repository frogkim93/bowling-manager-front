import { Component } from "@angular/core";
import { HTTPStatus } from "src/app/config/http.status";
import { LoginDto } from "src/app/dto/login/login.dto";
import { LoginService } from "./service/login.service";

@Component({
    selector: "login",
    templateUrl: "./view/login.component.html",
    providers: [LoginService]
})
export class LoginComponent {
    public loginRequest!: LoginDto;

    constructor(private loginService: LoginService) {
        this.loginRequest = new LoginDto();
        this.loginService.checkLogin();
    }

    public login(): void {
        if (this.loginRequest.isValid()) {
            this.loginService.auth(this.loginRequest).subscribe(
                response => {
                    switch (response) {
                        case HTTPStatus.BAD_REQUEST: 
                            alert("없는 아이디입니다.");
                            break;
                        case HTTPStatus.UNAUTHORIZED: 
                            alert("비밀번호가 틀렸습니다.");
                            break;
                        case HTTPStatus.INTERNAL_SERVER_ERROR: 
                            alert("잠시 후 다시 시도해주세요.");
                            break;
                        default:
                            alert("관리자에게 문의해주세요.");
                            break;
                    }
                }
            );
        } else {
            alert("아이디 또는 비밀번호를 다시 확인해주세요");
        }
    }
}