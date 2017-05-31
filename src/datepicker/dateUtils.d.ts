import * as moment from "moment";
export declare type DatePickerMode = "date" | "datetime" | "time";
export declare const local: (value?: any, format?: string | string[] | undefined, strictParsing?: boolean | undefined) => moment.Moment;
export declare const defaultFormat: {
    [type: string]: string;
};
export declare function areDatesEqual(d1: moment.Moment, d2: moment.Moment): boolean;
export declare function isCurrentMonth(actualDate: moment.Moment, date: moment.Moment): boolean;
export declare function isSelected(actualDate: moment.Moment, date: moment.Moment): boolean;
export declare function isDecadeSelected(date: moment.Moment, value: moment.Moment): boolean;
/**
 * Array of days belongs to the month of the specified date
 * including previous and next month days which are on the same week as first and last month days.
 */
export declare function monthCalendar(date: moment.Moment): moment.Moment[];
/**
 * Gets array of localized days of week.
 */
export declare function daysOfWeek(): string[];
export declare function decade(date: moment.Moment): moment.Moment[];
export declare function formatDecade(value: moment.Moment): string;
export declare function formatCentury(date: moment.Moment): string;
