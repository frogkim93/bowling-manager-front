import { MemberWithAvgDto } from "./memberWithAvg.dto";

export class TeamDto {
    public teamIndex!: number;
    public memberList: MemberWithAvgDto[] = [];
    public isChecked!: boolean;

    constructor() {
        this.isChecked = false;
    }
}