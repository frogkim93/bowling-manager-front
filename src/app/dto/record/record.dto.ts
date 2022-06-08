export namespace RecordDto {
    export class Record {
        public date!: Date;
        public isRegularGame!: boolean;
        public teamSeq!: number;
        public teamList: Team[] = [];
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