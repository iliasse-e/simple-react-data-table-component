"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableHeader = void 0;
var react_1 = __importDefault(require("react"));
require("./table-header.css");
/**
 * Sets the header's table
 * Called in table component
 * @param props {Array} names of employee's categories
 * @returns table header
 */
var TableHeader = function (_a) {
    var columns = _a.columns, onclick = _a.onclick;
    var handleSort = onclick;
    return (react_1.default.createElement("thead", null,
        react_1.default.createElement("tr", null, columns.map(function (column) { return (react_1.default.createElement("th", { style: { color: 'white' }, key: column.title },
            column.title,
            react_1.default.createElement("div", { className: "arrows" },
                react_1.default.createElement("i", { className: "arrow up", "data-testid": column.data + '-arrow-up', onClick: function () { return handleSort(column.data, 'up'); } }),
                react_1.default.createElement("i", { className: "arrow down", onClick: function () { return handleSort(column.data, 'down'); } })))); }))));
};
exports.TableHeader = TableHeader;
