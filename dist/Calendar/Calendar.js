"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calendar = void 0;
class Calendar {
    constructor(id = null) {
        this.id = id;
    }
    getEventsOfToday() {
        const today = new Date();
        const calendar = this.getCalendar();
        const events = calendar.getEventsForDay(today);
        return events;
    }
    getCalendar() {
        if (this.id === null) {
            return CalendarApp.getDefaultCalendar();
        }
        return CalendarApp.getCalendarById(this.id);
    }
}
exports.Calendar = Calendar;
