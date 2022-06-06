import { Gender } from "src/app/const/member/gender.code";

export class CreateRequestDto {
    public accountSeq!: number;
    public name!: string;
    public gender!: Gender;
}