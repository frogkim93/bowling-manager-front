import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "login",
    templateUrl: "./view/login.component.html",
    providers: []
})
export class LoginComponent {
    constructor(private router: Router) {}

    public login(): void {
        this.router.navigateByUrl("/main");
    }
}