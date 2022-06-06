import { Component } from "@angular/core";
import { HTTPStatus } from "src/app/config/http.status";
import { Gender } from "src/app/const/member/gender.code";
import { MemberDto } from "src/app/dto/member/member.dto";
import { MemberService } from "./service/member.service";

@Component({
    selector: "memberList",
    templateUrl: "./view/memberList.component.html",
    providers: [MemberService]
})
export class MemberListComponent {
    public isVisibleAddMemberDialog: boolean = false;
    public memberList: MemberDto[] = [];

    public selectedMember: MemberDto | null = null;

    public gender: typeof Gender = Gender;

    constructor(private memberService: MemberService) {
        this.getMemberList();
    }

    private getMemberList(): void {
        this.memberService.getMemberList().subscribe(
            response => {
                this.memberList = response;
            }
        );
    }

    public editMember(member: MemberDto): void {
        this.selectedMember = member;
        this.isVisibleAddMemberDialog = true;
    }

    public deleteMember(member: MemberDto): void {
        let isDelete: boolean = confirm(member.name + "을(를) 삭제하시겠습니까?");

        if (isDelete) {
            this.memberService.deleteMember(member).subscribe(
                response => {
                    switch (response) {
                        case HTTPStatus.OK: 
                            this.getMemberList();
                            break;
                        default:
                            alert("관리자에게 문의해주세요.");
                            break;
                    }
                }
            );
        }
    }

    public openAddMemberDialog(): void {
        this.selectedMember = null;
        this.isVisibleAddMemberDialog = true;
    }

    public closeDialog(): void {
        this.isVisibleAddMemberDialog = false;
        this.getMemberList();
    }
}