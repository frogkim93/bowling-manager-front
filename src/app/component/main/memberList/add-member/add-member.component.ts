import { AfterContentChecked, AfterContentInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";
import { HTTPStatus } from "src/app/config/http.status";
import { Gender } from "src/app/const/member/gender.code";
import { MemberDto } from "src/app/dto/member/member.dto";
import { MemberService } from "../service/member.service";

@Component({
    selector: "add-member",
    templateUrl: "./view/add-member.component.html"
})
export class AddMemberComponent implements AfterContentInit {
    @Output()
    private closeDialogEvent: EventEmitter<void> = new EventEmitter();

    @Input()
    public member!: MemberDto | null;

    public gender: typeof Gender = Gender;
    public isEditMode: boolean = false;
    
    constructor(private memberService: MemberService) {}

    ngAfterContentInit(): void {
        if (this.member == null) {
            this.member = new MemberDto();
            this.isEditMode = false;
        } else {
            this.isEditMode = true;
        }
    }

    public closeDialog(): void {
        this.closeDialogEvent.emit();
    }

    public save(): void {
        if (this.isEditMode) {
            this.memberService.editMember(this.member).subscribe(
                response => {
                    if (response != HTTPStatus.OK) {
                        alert("수정에 실패하였습니다. 다시 시도해주세요.");
                    } else {
                        this.closeDialogEvent.emit();
                    }
                }
            );
        } else {
            this.memberService.addMember(this.member).subscribe(
                response => {
                    if (response != HTTPStatus.OK) {
                        alert("추가에 실패하였습니다. 다시 시도해주세요.");
                    } else {
                        this.closeDialogEvent.emit();
                    }
                }
            );
        }
    }
}