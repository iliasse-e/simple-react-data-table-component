"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateRange = void 0;
var calculateRange = function (data, rowsPerPage) {
    var range = [];
    var num = Math.ceil(data.length / rowsPerPage);
    for (var i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};
exports.calculateRange = calculateRange;
