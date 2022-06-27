"use strict";
/**
 *
 * @param data array of data
 * @param by category to sort (exemple: "animals", "age" or "name")
 * @param order descending or ascending
 * @returns new array with sorted data
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortedTable = void 0;
var SortedTable = function (data, by, order) {
    var sortedProducts = __spreadArray([], data, true);
    if (order === 'up') {
        sortedProducts.sort(function (a, b) {
            if (a[by] < b[by]) {
                return -1;
            }
            if (a[by] > b[by]) {
                return 1;
            }
            return 0;
        });
    }
    else {
        sortedProducts.sort(function (a, b) {
            if (a[by] < b[by]) {
                return 1;
            }
            if (a[by] > b[by]) {
                return -1;
            }
            return 0;
        });
    }
    return sortedProducts;
};
exports.SortedTable = SortedTable;
