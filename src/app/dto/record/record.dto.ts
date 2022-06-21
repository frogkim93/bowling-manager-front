import { TeamDto } from "../team/team.dto";

export namespace RecordDto {
    export class Record {
        public accountSeq!: number;
        public date!: Date;
        public isRegularGame!: boolean;
        public teamSeq!: number;
        public teamList: Team[] = [];

        public init(teamList: TeamDto[], gameCount: number): void {
            this.date = new Date();
            this.isRegularGame = false;
            this.teamList = [];

            for (let i = 0; i < teamList.length; i++) {
                let team = new Team();
                team.memberList = [];

                for (let j = 0; j < teamList[i].memberList.length; j++) {
                    let member: Member = new Member();
                    member.seq = teamList[i].memberList[j].seq;
                    member.name = teamList[i].memberList[j].name;
                    member.scoreList = [];

                    for (let k = 0; k < gameCount; k++) {
                        member.scoreList.push(0);
                    }

                    team.memberList.push(member);
                }

                this.teamList.push(team);
            }
        }
    }

    export class Team {
        public memberList: Member[] = [];
    }

    export class Member {
        public seq!: number;
        public teamMappingSeq!: number;
        public name!: string;
        public scoreList: number[] = [];
    }
}