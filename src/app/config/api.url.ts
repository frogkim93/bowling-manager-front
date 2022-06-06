export class APIUrl {
    public static SERVER: string = "http://192.168.0.22:8080";

    public static LOGIN: string = APIUrl.SERVER + "/login";
    public static PUBLICKEY: string = APIUrl.LOGIN + "/publicKey";

    public static MEMBER: string = APIUrl.SERVER + "/member";
    public static SPECIFIC_MEMBER: any = (memberSeq: number) => `${APIUrl.MEMBER}/${memberSeq}`;
    public static MEMBER_LIST: any = (accountSeq: number) => `${APIUrl.MEMBER}/byMaster/${accountSeq}`;
}