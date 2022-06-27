import React from 'react';
import './table-header.css';
/**
 * Sets the header's table
 * Called in table component
 * @param props {Array} names of employee's categories
 * @returns table header
 */
export var TableHeader = function (_a) {
    var columns = _a.columns, onclick = _a.onclick;
    var handleSort = onclick;
    return (React.createElement("thead", null,
        React.createElement("tr", null, columns.map(function (column) { return (React.createElement("th", { style: { color: 'white' }, key: column.title },
            column.title,
            React.createElement("div", { className: "arrows" },
                React.createElement("i", { className: "arrow up", "data-testid": column.data + '-arrow-up', onClick: function () { return handleSort(column.data, 'up'); } }),
                React.createElement("i", { className: "arrow down", onClick: function () { return handleSort(column.data, 'down'); } })))); }))));
};
