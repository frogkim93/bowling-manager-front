import { JSEncrypt } from 'jsencrypt';

export class RSAUtil {
    private static instance: RSAUtil | null = null;

    private constructor() {}

    public static getInstance(): RSAUtil {
        if (this.instance == null) {
            this.instance = new RSAUtil();
        }

        return this.instance;
    }

    public encrypt(publicKey: string, text: string): string {
        let jsencrypt = new JSEncrypt();
        jsencrypt.setPublicKey(publicKey);

        let encryptedText: string | false = jsencrypt.encrypt(text);

        if (encryptedText == false) {
            return text;
        } else {
            return encryptedText;
        }
    }
}