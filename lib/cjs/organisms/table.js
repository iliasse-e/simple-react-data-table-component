"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
var react_1 = require("react");
var sort_1 = require("../services/sort");
var table_header_1 = require("../molecules/table-header/table-header");
var table_body_1 = require("../molecules/table-body/table-body");
require("./table.css");
var table_color_context_1 = require("../services/table-color-context");
var react_2 = __importDefault(require("react"));
/**
 * Renders table of data
 * @param { Column[] } obj.columns column labels to fill thead
 * @param { TableProps.data } obj.data data to fill the tbody
 * @param { number } obj.entries sets the number of rows to show (10, 25 or any number of lines)
 * @returns table of data
 */
var Table = function (_a) {
    var columns = _a.columns, data = _a.data, entries = _a.entries, pageNo = _a.pageNo;
    var bgColor = (0, react_1.useContext)(table_color_context_1.TableColor).value;
    // hook that sorts data
    var _b = (0, react_1.useState)(data), sortedField = _b[0], setSortedField = _b[1];
    (0, react_1.useEffect)(function () {
        setSortedField(data);
    }, [data]);
    /**
     * Sorts table by calling a method and passing it parameters
     * @param by element by what it should sort the table
     * @param order up or down
     */
    var handleSort = function (by, order) {
        setSortedField((0, sort_1.SortedTable)(sortedField, by, order));
    };
    return (react_2.default.createElement("table", { className: "data-table", style: { backgroundColor: bgColor } },
        react_2.default.createElement(table_header_1.TableHeader, { columns: columns, onclick: handleSort }),
        react_2.default.createElement(table_body_1.TableBody, { fields: sortedField, entries: entries, pageNo: pageNo, columns: columns })));
};
exports.Table = Table;
