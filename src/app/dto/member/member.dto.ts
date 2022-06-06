import { Gender } from "src/app/const/member/gender.code";

export class MemberDto {
    public seq!: number;
    public name!: string;
    public gender!: Gender;
}