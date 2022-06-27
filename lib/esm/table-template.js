import React, { useState } from 'react';
import { Table } from './organisms/table';
import './template.css';
import '../molecules/pagination/pagination.css';
import { TableDropdown } from './molecules/dropdown/table-dropdown';
import { TableSearch } from './molecules/search/table-search';
import { TableFooter } from './molecules/footer/table-footer';
import { PaginationContext } from './services/pagination-context';
import { TableColor } from './services/table-color-context';
/**
 * Root of the data table package
 */
export var TableTemplate = function (_a) {
    var dataInput = _a.dataInput, columns = _a.columns, color = _a.color;
    var _b = useState(10), entries = _b[0], setEntries = _b[1];
    var _c = useState(1), pageNo = _c[0], setPageNo = _c[1];
    var _d = useState(dataInput), data = _d[0], setData = _d[1];
    var handleSearch = function (word) {
        var res = dataInput.filter(function (element) {
            return JSON.stringify(Object.values(element))
                .toLocaleLowerCase()
                .includes(word.toLocaleLowerCase());
        });
        setData(res);
        setPageNo(1);
    };
    return (React.createElement(TableColor.Provider, { value: { value: color } },
        React.createElement(PaginationContext.Provider, { value: { value: pageNo, setValue: setPageNo } },
            React.createElement("section", { className: "table-section-container" },
                React.createElement("div", { className: "table-header" },
                    React.createElement(TableDropdown, { setEntries: setEntries, setPageNo: setPageNo }),
                    React.createElement(TableSearch, { handleSearch: handleSearch })),
                React.createElement(Table, { columns: columns, data: data, entries: entries, pageNo: pageNo }),
                React.createElement(TableFooter, { data: data, entries: entries })))));
};
