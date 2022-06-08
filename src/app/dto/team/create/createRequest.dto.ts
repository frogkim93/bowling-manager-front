import { MemberWithAvgDto } from "../memberWithAvg.dto";
import { TeamDto } from "../team.dto";

export namespace CreateRequestDto {
    export class Request {
        public teamList: Team[] = [];

        constructor(teamList: TeamDto[]) {
            for (let i = 0; i < teamList.length; i++) {
                this.teamList.push(new Team(teamList[i]));
            }
        }
    }

    export class Team {
        public memberList: Member[] = [];

        constructor(team: TeamDto) {
            for (let i = 0; i < team.memberList.length; i++) {
                this.memberList.push(new Member(team.memberList[i]));
            }
        }
    }

    export class Member {
        public seq!: number

        constructor(member: MemberWithAvgDto) {
            this.seq = member.seq;
        }
    }
}