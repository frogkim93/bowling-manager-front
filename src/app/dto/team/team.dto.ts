import { MemberWithAvgDto } from "./memberWithAvg.dto";

export class TeamDto {
    public memberList: MemberWithAvgDto[] = [];
    public isChecked!: boolean;

    constructor() {
        this.isChecked = false;
    }

    public getAvg(): number {
        let total: number = 0;

        this.memberList.forEach(
            member => {
                total += member.lastAvg;
            }
        );

        if (total == 0) {
            return total;
        }

        return Math.floor(total / this.memberList.length);
    }
}