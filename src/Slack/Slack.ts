import { encodeQueryData } from '../helpers'

export class Slack {
    private readonly BASE_URL = 'https://slack.com'
    private _token: string | null = null

    /**
     * set Token
     * @param {string} token
     * @return this
     */
    public token(token: string): this {
        this._token = token
        return this
    }

    public beforeRequest(): void {
        this.valid()
    }

    public valid(): void {
        if (this._token === null) {
            throw new Error('Token not founded')
        }
    }
    /* eslint-disable */

    /**
     * Webhookにデータを送る
     * @param {string} url WebhookのURL
     * @param {any} payload POSTデータ
     */
    public static postWebhook(url: string, payload: any): void {
        const res = UrlFetchApp.fetch(url, {
            contentType: 'application/json',
            method: 'post',
            payload: JSON.stringify(payload),
        })
        console.log(String(res.getResponseCode()))
    }

    /**
     * Slack get request
     * @param {string} path
     * @param {any} payload
     */
    public get(path: string, payload: any): any {
        this.beforeRequest()

        const requestUrl = `${this.BASE_URL}/api/${path}?token=${this._token}&${encodeQueryData(payload)}`
        const res = UrlFetchApp.fetch(requestUrl)
        const json = res.getContentText()
        console.log(String(res.getResponseCode()))

        return JSON.parse(json)
    }

    /**
     * Slack post request
     * @param {string} path
     * @param {any} payload
     */
    public post(path: string, payload: any): any {
        this.beforeRequest()

        const requestUrl = `${this.BASE_URL}/api/${path}`
        const headers = {
            Authorization: `Bearer ${this._token}`,
        }
        const res = UrlFetchApp.fetch(requestUrl, {
            headers: headers,
            method: 'post',
            payload: payload,
        })
        const json = res.getContentText()
        console.log(String(res.getResponseCode()))

        return JSON.parse(json)
    }
    /* eslint-enable */
}
