import { Component } from "@angular/core";

@Component({
    selector: "game-history",
    templateUrl: "./view/game-history.component.html"
})
export class GameHistoryComponent {
    public today: Date = new Date();
}