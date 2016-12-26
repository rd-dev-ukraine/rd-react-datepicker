import * as moment from 'moment';

export type DatePickerMode = 'date' | 'datetime' | 'time';

export function local(value?: any, format?: string | string[], strictParsing?: boolean): moment.Moment {
    return moment(value, format, strictParsing);
}

export const defaultFormat: {[type: string]: string;} = {
    'date': 'LL',
    'datetime': 'LLL',
    'time': 'LT'
};

export function areDatesEqual(d1: moment.Moment, d2: moment.Moment): boolean {
    if (!d1 || !d1.isValid()) {
        throw new Error('First date is not valid.');
    }
    if (!d2 || !d2.isValid()) {
        throw new Error('Second date is not valid.');
    }
    return d1.year() === d2.year() &&
           d1.dayOfYear() === d2.dayOfYear();
}

export function isCurrentMonth(actualDate: moment.Moment, date: moment.Moment): boolean {
    if (!date) {
        throw new Error('Date is required.');
    }

    return actualDate.year() === date.year() &&
           actualDate.month() === date.month();
}

export function isSelected(actualDate: moment.Moment, date: moment.Moment): boolean {
    if (!date) {
        throw new Error('Date is required.');
    }

    if (!actualDate) {
        return false;
    }
    return areDatesEqual(actualDate, date);
}

export function isDecadeSelected(date: moment.Moment, value: moment.Moment): boolean {
    const [start, end] = decade(value);
    return date.year() >= start.year() &&
           date.year() <= end.year();
}

/**
 * Array of days belongs to the month of the specified date
 * including previous and next month days which are on the same week as first and last month days.
 */
export function monthCalendar(date: moment.Moment): moment.Moment[] {
    const start = date.clone().startOf('month').startOf('week').startOf('day');
    const end = date.clone().endOf('month').endOf('week').startOf('day');

    const result: moment.Moment[] = [];

    let current = start.weekday(0).subtract(1, 'd');

    while (!areDatesEqual(current, end)) {
        current = current.clone().add(1, 'd');
        result.push(current);
    }

    return result;
}

/**
 * Gets array of localized days of week.
 */
export function daysOfWeek(): string[] {
    const result: string[] = [];

    for (let weekday = 0; weekday < 7; weekday++) {
        result.push(moment.utc().weekday(weekday).format('dd'));
    }

    return result;
}

export function decade(date: moment.Moment): moment.Moment[] {
    if (!date || !date.isValid()) {
        throw new Error('Date is not valid');
    }

    const year = date.year();
    const startYear = year - year % 10;
    const endYear = startYear + 9;

    return [
        date.clone().year(startYear),
        date.clone().year(endYear)
    ];
}

export function formatDecade(value: moment.Moment): string {
    const [start, end] = decade(value);

    return `${start.format('YYYY')}-${end.format('YYYY')}`;
}

export function formatCentury(date: moment.Moment): string {
    const startYear = date.year() - date.year() % 100;
    const endYear = startYear + 99;

    return `${startYear}-${endYear}`;
}
