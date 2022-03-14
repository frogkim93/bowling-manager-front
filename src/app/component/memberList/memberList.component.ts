import { Component } from "@angular/core";

@Component({
    selector: "memberList",
    templateUrl: "./view/memberList.component.html"
})
export class MemberListComponent {
    public isVisibleAddMemberDialog: boolean = false;

    public openAddMemberDialog(): void {
        this.isVisibleAddMemberDialog = true;
    }

    public closeDialog(): void {
        this.isVisibleAddMemberDialog = false;
    }
}