/**
 *
 * @param {Date} date
 * @return {boolean}
 */
export function isHoliday(date: Date): boolean {
    const weekInt = date.getDay()
    if (weekInt <= 0 || 6 <= weekInt) {
        return true
    }
    const calendarId = 'ja.japanese#holiday@group.v.calendar.google.com'
    const calendar = CalendarApp.getCalendarById(calendarId)
    const dayEvents = calendar.getEventsForDay(date)
    if (dayEvents.length > 0) {
        return true
    }
    return false
}

/**
 *
 * @param {Object} queries
 * @return {string}
 */
/* eslint-disable */
export function encodeQueryData(queries: any) {
    const ret = []
    for (const key in queries) ret.push(`${key}=${queries[key]}`)
    return ret.join('&')
}
/* eslint-enable */
