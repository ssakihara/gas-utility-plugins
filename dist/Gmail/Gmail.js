"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gmail = void 0;
class Gmail {
    constructor() {
        this._filter = 'is:unread';
    }
    set filter(v) {
        this._filter = v;
    }
    getMessages() {
        const results = [];
        const threads = GmailApp.search(this._filter, 0, 10);
        for (const i in threads) {
            const thread = threads[i];
            const messages = thread.getMessages();
            for (const j in messages) {
                const message = messages[j];
                if (message.isUnread()) {
                    results.push(message);
                }
            }
            thread.markRead();
        }
        return results;
    }
    delete() {
        const threads = GmailApp.search(this._filter);
        console.log('該当スレッド: ' + threads.length + '件');
        for (let i = 0; i < threads.length; i++) {
            threads[i].moveToTrash();
            if (i > 1000) {
                console.log('1000件削除しました');
                break;
            }
        }
        console.log('終了');
    }
}
exports.Gmail = Gmail;
