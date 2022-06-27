"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBody = void 0;
var formate_date_1 = require("../../services/formate-date");
var react_1 = __importDefault(require("react"));
require("./table-body.css");
var type_1 = require("../../type");
/**
 * Renders table body that fits into a table
 * Converts Date types into string formated type (no need to convert already)
 * @param param0
 * @returns tbody
 */
var TableBody = function (_a) {
    var fields = _a.fields, pageNo = _a.pageNo, entries = _a.entries, columns = _a.columns;
    return (react_1.default.createElement("tbody", { className: "data-table__body" }, fields
        .slice(entries * pageNo - entries, entries * pageNo)
        .map(function (element) { return (react_1.default.createElement("tr", { key: Math.random() }, columns.map(function (column) {
        return column.type === type_1.TYPE.date ? (react_1.default.createElement("td", { key: (0, formate_date_1.convertDate)(element[column.data]) }, (0, formate_date_1.convertDate)(element[column.data]))) : (react_1.default.createElement("td", { key: element[column.data] }, element[column.data]));
    }))); })));
};
exports.TableBody = TableBody;
