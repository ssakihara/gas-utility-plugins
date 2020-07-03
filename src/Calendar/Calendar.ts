export class Calendar {
    protected id: string | null
    constructor(id: string | null = null) {
        this.id = id
    }
    public getEventsOfToday(): GoogleAppsScript.Calendar.CalendarEvent[] {
        const today = new Date()
        const calendar = this.getCalendar()
        const events = calendar.getEventsForDay(today)
        return events
    }

    protected getCalendar(): GoogleAppsScript.Calendar.Calendar {
        if (this.id === null) {
            return CalendarApp.getDefaultCalendar()
        }
        return CalendarApp.getCalendarById(this.id)
    }
}
