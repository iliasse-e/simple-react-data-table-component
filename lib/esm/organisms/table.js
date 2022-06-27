import { useContext, useEffect, useState } from 'react';
import { SortedTable } from '../services/sort';
import { TableHeader } from '../molecules/table-header/table-header';
import { TableBody } from '../molecules/table-body/table-body';
import './table.css';
import { TableColor } from '../services/table-color-context';
import React from 'react';
/**
 * Renders table of data
 * @param { Column[] } obj.columns column labels to fill thead
 * @param { TableProps.data } obj.data data to fill the tbody
 * @param { number } obj.entries sets the number of rows to show (10, 25 or any number of lines)
 * @returns table of data
 */
export var Table = function (_a) {
    var columns = _a.columns, data = _a.data, entries = _a.entries, pageNo = _a.pageNo;
    var bgColor = useContext(TableColor).value;
    // hook that sorts data
    var _b = useState(data), sortedField = _b[0], setSortedField = _b[1];
    useEffect(function () {
        setSortedField(data);
    }, [data]);
    /**
     * Sorts table by calling a method and passing it parameters
     * @param by element by what it should sort the table
     * @param order up or down
     */
    var handleSort = function (by, order) {
        setSortedField(SortedTable(sortedField, by, order));
    };
    return (React.createElement("table", { className: "data-table", style: { backgroundColor: bgColor } },
        React.createElement(TableHeader, { columns: columns, onclick: handleSort }),
        React.createElement(TableBody, { fields: sortedField, entries: entries, pageNo: pageNo, columns: columns })));
};
