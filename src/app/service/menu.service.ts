import { Injectable } from "@angular/core";
import { MenuCode } from "../const/menu.code";

@Injectable()
export class MenuService {
    private currentMenu: MenuCode = MenuCode.MAIN;

    public getCurrentMenu(): MenuCode {
        return this.currentMenu;
    }

    public changeMenu(menu: MenuCode): void {
        this.currentMenu = menu;
    }
}