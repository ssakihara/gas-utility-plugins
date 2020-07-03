"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slack = void 0;
const helpers_1 = require("../helpers");
class Slack {
    constructor() {
        this.BASE_URL = 'https://slack.com';
        this._token = null;
        /* eslint-enable */
    }
    /**
     * set Token
     * @param {string} token
     * @return this
     */
    token(token) {
        this._token = token;
        return this;
    }
    beforeRequest() {
        this.valid();
    }
    valid() {
        if (this._token === null) {
            throw new Error('Token not founded');
        }
    }
    /* eslint-disable */
    /**
     * Webhookにデータを送る
     * @param {string} url WebhookのURL
     * @param {any} payload POSTデータ
     */
    static postWebhook(url, payload) {
        const res = UrlFetchApp.fetch(url, {
            contentType: 'application/json',
            method: 'post',
            payload: JSON.stringify(payload),
        });
        console.log(String(res.getResponseCode()));
    }
    /**
     * Slack get request
     * @param {string} path
     * @param {any} payload
     */
    get(path, payload) {
        this.beforeRequest();
        const requestUrl = `${this.BASE_URL}/api/${path}?token=${this._token}&${helpers_1.encodeQueryData(payload)}`;
        const res = UrlFetchApp.fetch(requestUrl);
        const json = res.getContentText();
        console.log(String(res.getResponseCode()));
        return JSON.parse(json);
    }
    /**
     * Slack post request
     * @param {string} path
     * @param {any} payload
     */
    post(path, payload) {
        this.beforeRequest();
        const requestUrl = `${this.BASE_URL}/api/${path}`;
        const headers = {
            Authorization: `Bearer ${this._token}`,
        };
        const res = UrlFetchApp.fetch(requestUrl, {
            headers: headers,
            method: 'post',
            payload: payload,
        });
        const json = res.getContentText();
        console.log(String(res.getResponseCode()));
        return JSON.parse(json);
    }
}
exports.Slack = Slack;
