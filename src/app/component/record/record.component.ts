import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "record",
    templateUrl: "./view/record.component.html"
})
export class RecordComponent {
    @Output()
    public closeEvent: EventEmitter<void> = new EventEmitter();

    public closeDialog(): void {
        this.closeEvent.emit();
    }
}