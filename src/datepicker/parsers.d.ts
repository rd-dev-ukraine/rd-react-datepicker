import * as moment from "moment";
export interface MomentParseFunction {
    (value: any, format?: string | string[], strictParsing?: boolean): moment.Moment;
}
export declare type ParserFunction = (value: any, parseFn: MomentParseFunction) => moment.Moment;
/**
 * Parses the given value as date using moment.js.
 * If value cannot be parsed the invalid Moment object is returned.
 * The calling code should not assume if the method returns local or utc value and
 * must convert value to corresponding form itself.
 */
export declare const parserFabric: (mode: string | undefined, format: string) => ParserFunction;
