export class Gmail {
    protected _filter = 'is:unread'

    set filter(v: string) {
        this._filter = v
    }

    public getMessages(): GoogleAppsScript.Gmail.GmailMessage[] {
        const results: GoogleAppsScript.Gmail.GmailMessage[] = []
        const threads = GmailApp.search(this._filter, 0, 10)

        for (const i in threads) {
            const thread = threads[i]
            const messages = thread.getMessages()
            for (const j in messages) {
                const message = messages[j]
                if (message.isUnread()) {
                    results.push(message)
                }
            }
            thread.markRead()
        }
        return results
    }

    public delete(): void {
        const threads = GmailApp.search(this._filter)
        for (let i = 0; i < threads.length; i++) {
            threads[i].moveToTrash()
            if (i > 1000) {
                break
            }
        }
    }
}
