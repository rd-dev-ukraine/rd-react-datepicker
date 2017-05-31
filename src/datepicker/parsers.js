"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var dateParseData = {
    separators: ["/", "\\", "-", "."],
    day: ["DD", "D"],
    month: ["MM", "M"],
    year: ["YYYY", "YY"]
};
var generateDateParseFormats = function () {
    return (generateDateParseFormatsFromParts(dateParseData.month, dateParseData.day, dateParseData.year).concat(generateDateParseFormatsFromParts(dateParseData.day, dateParseData.month, dateParseData.year), generateDateParseFormatsFromParts(dateParseData.year, dateParseData.month, dateParseData.day), generateDateParseFormatsFromParts(dateParseData.year, dateParseData.day, dateParseData.month)));
};
var parseFormat = {
    "date": generateDateParseFormats(),
    "datetime": ["LLL"],
    "time": ["H:M", "hh:mm A", "LT", "LTS"]
};
function generateDateParseFormatsFromParts(firstPart, secondPart, thirdPart) {
    var result = [];
    for (var _i = 0, _a = dateParseData.separators; _i < _a.length; _i++) {
        var separator = _a[_i];
        for (var _b = 0, thirdPart_1 = thirdPart; _b < thirdPart_1.length; _b++) {
            var third = thirdPart_1[_b];
            for (var _c = 0, secondPart_1 = secondPart; _c < secondPart_1.length; _c++) {
                var second = secondPart_1[_c];
                for (var _d = 0, firstPart_1 = firstPart; _d < firstPart_1.length; _d++) {
                    var first = firstPart_1[_d];
                    result.push("" + first + separator + second + separator + third);
                }
            }
        }
    }
    return result;
}
/**
 * Parses the given value as date using moment.js.
 * If value cannot be parsed the invalid Moment object is returned.
 * The calling code should not assume if the method returns local or utc value and
 * must convert value to corresponding form itself.
 */
exports.parserFabric = function (mode, format) {
    if (mode === void 0) { mode = "date"; }
    return function (value, parseFn) {
        if (value === null || value === undefined || value === "") {
            return null;
        }
        parseFn = parseFn || moment.utc;
        var formatsToParse = parseFormat[mode];
        return parseFn(value, [format].concat(formatsToParse), true);
    };
};
//# sourceMappingURL=parsers.js.map