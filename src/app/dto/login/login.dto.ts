export class LoginDto {
    public userId!: string;
    public password!: string;

    public isValid(): boolean {
        if (this.userId == undefined || this.password == undefined) {
            return false;
        }

        if (this.userId.replace(/ /g, "") == "" || this.password.replace(/ /g, "") == "") {
            return false;
        }

        return true;
    }
}