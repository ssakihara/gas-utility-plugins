/// <reference types="google-apps-script" />
export declare class Gmail {
    protected _filter: string;
    set filter(v: string);
    getMessages(): GoogleAppsScript.Gmail.GmailMessage[];
    delete(): void;
}
