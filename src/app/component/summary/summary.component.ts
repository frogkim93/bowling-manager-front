import { Component } from "@angular/core";

@Component({
    selector: "summary",
    templateUrl: "./view/summary.component.html"
})
export class SummaryComponent {
    public isVisibleRecordDialog: boolean = false;

    public toggleVisibleRecordDialog(): void {
        this.isVisibleRecordDialog = !this.isVisibleRecordDialog;
    }
}