"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encodeQueryData = exports.isHoliday = void 0;
/**
 *
 * @param {Date} date
 * @return {boolean}
 */
function isHoliday(date) {
    const weekInt = date.getDay();
    if (weekInt <= 0 || 6 <= weekInt) {
        return true;
    }
    const calendarId = 'ja.japanese#holiday@group.v.calendar.google.com';
    const calendar = CalendarApp.getCalendarById(calendarId);
    const dayEvents = calendar.getEventsForDay(date);
    if (dayEvents.length > 0) {
        return true;
    }
    return false;
}
exports.isHoliday = isHoliday;
/**
 *
 * @param {Object} queries
 * @return {string}
 */
/* eslint-disable */
function encodeQueryData(queries) {
    const ret = [];
    for (const key in queries)
        ret.push(`${key}=${queries[key]}`);
    return ret.join('&');
}
exports.encodeQueryData = encodeQueryData;
/* eslint-enable */
