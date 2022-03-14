import { Component } from "@angular/core";
import { MenuCode } from "src/app/const/menu.code";
import { MenuService } from "src/app/service/menu.service";

@Component({
    selector: "menu",
    templateUrl: "./view/menu.component.html"
})
export class MenuComponent {
    public menu: typeof MenuCode = MenuCode;

    constructor(private menuService: MenuService) {}

    public isCurrentMenu(menu: MenuCode): boolean {
        if (this.menuService.getCurrentMenu() == menu) {
            return true;
        }

        return false;
    }

    public changeMenu(menu: MenuCode): void {
        this.menuService.changeMenu(menu);
    }
}