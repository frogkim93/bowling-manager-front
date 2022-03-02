import { Component } from "@angular/core";
import { MenuCode } from "src/app/const/menu.code";
import { MenuService } from "src/app/service/menu.service";

@Component({
    selector: "main",
    templateUrl: "./view/main.component.html"
})
export class MainComponent {
    public menu: typeof MenuCode = MenuCode;

    constructor(private menuService: MenuService) {}

    public isCurrentMenu(menu: MenuCode): boolean {
        if (this.menuService.getCurrentMenu() == menu) {
            return true;
        }

        return false;
    }
}