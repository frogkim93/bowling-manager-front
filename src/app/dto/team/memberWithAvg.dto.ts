import { MemberDto } from "../member/member.dto";

export class MemberWithAvgDto extends MemberDto {
    public lastAvg!: number;
    public teamIndex!: number;

    constructor() {
        super();
        this.teamIndex = -1;
    }
}