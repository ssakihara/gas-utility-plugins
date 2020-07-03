/// <reference types="google-apps-script" />
export declare class Calendar {
    protected id: string | null;
    constructor(id?: string | null);
    getEventsOfToday(): GoogleAppsScript.Calendar.CalendarEvent[];
    protected getCalendar(): GoogleAppsScript.Calendar.Calendar;
}
