import { convertDate } from '../../services/formate-date';
import React from 'react';
import './table-body.css';
import { TYPE } from '../../type';
/**
 * Renders table body that fits into a table
 * Converts Date types into string formated type (no need to convert already)
 * @param param0
 * @returns tbody
 */
export var TableBody = function (_a) {
    var fields = _a.fields, pageNo = _a.pageNo, entries = _a.entries, columns = _a.columns;
    return (React.createElement("tbody", { className: "data-table__body" }, fields
        .slice(entries * pageNo - entries, entries * pageNo)
        .map(function (element) { return (React.createElement("tr", { key: Math.random() }, columns.map(function (column) {
        return column.type === TYPE.date ? (React.createElement("td", { key: convertDate(element[column.data]) }, convertDate(element[column.data]))) : (React.createElement("td", { key: element[column.data] }, element[column.data]));
    }))); })));
};
