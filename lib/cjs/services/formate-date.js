"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertDate = exports.FormatType = void 0;
var FormatType;
(function (FormatType) {
    FormatType[FormatType["DD/MM/YYYY"] = 0] = "DD/MM/YYYY";
    FormatType[FormatType["MM/DD/YYYY"] = 1] = "MM/DD/YYYY";
    FormatType[FormatType["MM/YYYY"] = 2] = "MM/YYYY";
})(FormatType = exports.FormatType || (exports.FormatType = {}));
/**
 * Converts a Date to a string of this format : 'DD/MM/YYYY',
  'MM/DD/YYYY',
  'MM/YYYY'
 * @param input input Date format
 * @param type output format of date selected (UK, US)
 * @returns formated stringify date with the chosen format
 */
var convertDate = function (input, type) {
    // if (typeof input === 'string') return input
    function pad(s) {
        return s < 10 ? '0' + s : s;
    }
    var d = new Date(input);
    if (type === FormatType['MM/DD/YYYY'])
        return [pad(d.getMonth() + 1), pad(d.getDate()), d.getFullYear()].join('/');
    else if (type === FormatType['MM/YYYY'])
        return [pad(d.getMonth() + 1), d.getFullYear()].join('/');
    else
        return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
};
exports.convertDate = convertDate;
