import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "add-member",
    templateUrl: "./view/add-member.component.html"
})
export class AddMemberComponent {
    @Output()
    private closeDialogEvent: EventEmitter<void> = new EventEmitter();

    public closeDialog(): void {
        this.closeDialogEvent.emit();
    }

    public addMember(): void {
        this.closeDialogEvent.emit();
    }
}