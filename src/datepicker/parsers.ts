import * as moment from "moment";


const dateParseData = {
    separators: ["/", "\\", "-", "."],
    day: ["DD", "D"],
    month: ["MM", "M"],
    year: ["YYYY", "YY"]
};

const generateDateParseFormats = (): string[] =>
    ([
        ...generateDateParseFormatsFromParts(dateParseData.month, dateParseData.day, dateParseData.year),
        ...generateDateParseFormatsFromParts(dateParseData.day, dateParseData.month, dateParseData.year),
        ...generateDateParseFormatsFromParts(dateParseData.year, dateParseData.month, dateParseData.day),
        ...generateDateParseFormatsFromParts(dateParseData.year, dateParseData.day, dateParseData.month)
    ]);

const parseFormat: { [type: string]: string[] } = {
    "date": generateDateParseFormats(),
    "datetime": ["LLL"],
    "time": ["H:M", "hh:mm A", "LT", "LTS"]
};

export interface MomentParseFunction {
    (value: any, format?: string | string[], strictParsing?: boolean): moment.Moment;
}

function generateDateParseFormatsFromParts(firstPart: string[], secondPart: string[], thirdPart: string[]): string[] {
    const result: string[] = [];

    for (let separator of dateParseData.separators) {
        for (let third of thirdPart) {
            for (let second of secondPart) {
                for (let first of firstPart) {
                    result.push(`${first}${separator}${second}${separator}${third}`);
                }
            }
        }
    }

    return result;
}

export type ParserFunction = (value: any, parseFn: MomentParseFunction) => moment.Moment;

/**
 * Parses the given value as date using moment.js.
 * If value cannot be parsed the invalid Moment object is returned.
 * The calling code should not assume if the method returns local or utc value and
 * must convert value to corresponding form itself.
 */
export const parserFabric = (mode = "date", format: string): ParserFunction =>
    (value: any, parseFn: MomentParseFunction): moment.Moment | any => {
        if (value === null || value === undefined || value === "") {
            return null;
        }

        parseFn = parseFn || moment.utc;
        const formatsToParse = parseFormat[mode];

        return parseFn(value, [format, ...formatsToParse], true);
    };
