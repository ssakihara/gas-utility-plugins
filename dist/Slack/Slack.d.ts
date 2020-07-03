export declare class Slack {
    private readonly BASE_URL;
    private _token;
    /**
     * set Token
     * @param {string} token
     * @return this
     */
    token(token: string): this;
    beforeRequest(): void;
    valid(): void;
    /**
     * Webhookにデータを送る
     * @param {string} url WebhookのURL
     * @param {any} payload POSTデータ
     */
    static postWebhook(url: string, payload: any): void;
    /**
     * Slack get request
     * @param {string} path
     * @param {any} payload
     */
    get(path: string, payload: any): any;
    /**
     * Slack post request
     * @param {string} path
     * @param {any} payload
     */
    post(path: string, payload: any): any;
}
