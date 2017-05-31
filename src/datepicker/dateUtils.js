"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
exports.local = function (value, format, strictParsing) { return moment(value, format, strictParsing); };
exports.defaultFormat = {
    "date": "LL",
    "datetime": "LLL",
    "time": "LT"
};
function areDatesEqual(d1, d2) {
    if (!d1 || !d1.isValid()) {
        throw new Error("First date is not valid.");
    }
    if (!d2 || !d2.isValid()) {
        throw new Error("Second date is not valid.");
    }
    return d1.year() === d2.year()
        && d1.dayOfYear() === d2.dayOfYear();
}
exports.areDatesEqual = areDatesEqual;
function isCurrentMonth(actualDate, date) {
    if (!date) {
        throw new Error("Date is required.");
    }
    return actualDate.year() === date.year()
        && actualDate.month() === date.month();
}
exports.isCurrentMonth = isCurrentMonth;
function isSelected(actualDate, date) {
    if (!date) {
        throw new Error("Date is required.");
    }
    if (!actualDate) {
        return false;
    }
    return areDatesEqual(actualDate, date);
}
exports.isSelected = isSelected;
function isDecadeSelected(date, value) {
    var _a = decade(value), start = _a[0], end = _a[1];
    return date.year() >= start.year()
        && date.year() <= end.year();
}
exports.isDecadeSelected = isDecadeSelected;
/**
 * Array of days belongs to the month of the specified date
 * including previous and next month days which are on the same week as first and last month days.
 */
function monthCalendar(date) {
    var start = date.clone().startOf("month").startOf("week").startOf("day");
    var end = date.clone().endOf("month").endOf("week").startOf("day");
    var result = [];
    var current = start.weekday(0).subtract(1, "d");
    while (!areDatesEqual(current, end)) {
        current = current.clone().add(1, "d");
        result.push(current);
    }
    return result;
}
exports.monthCalendar = monthCalendar;
/**
 * Gets array of localized days of week.
 */
function daysOfWeek() {
    var result = [];
    for (var weekday = 0; weekday < 7; weekday++) {
        result.push(moment.utc().weekday(weekday).format("dd"));
    }
    return result;
}
exports.daysOfWeek = daysOfWeek;
function decade(date) {
    if (!date || !date.isValid()) {
        throw new Error("Date is not valid");
    }
    var year = date.year();
    var startYear = year - year % 10;
    var endYear = startYear + 9;
    return [
        date.clone().year(startYear),
        date.clone().year(endYear)
    ];
}
exports.decade = decade;
function formatDecade(value) {
    var _a = decade(value), start = _a[0], end = _a[1];
    return start.format("YYYY") + "-" + end.format("YYYY");
}
exports.formatDecade = formatDecade;
function formatCentury(date) {
    var startYear = date.year() - date.year() % 100;
    var endYear = startYear + 99;
    return startYear + "-" + endYear;
}
exports.formatCentury = formatCentury;
//# sourceMappingURL=dateUtils.js.map