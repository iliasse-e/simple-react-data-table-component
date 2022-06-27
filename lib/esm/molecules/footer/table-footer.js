import React, { useContext } from 'react';
import { PaginationButton } from '../../atoms/button/pagination-button';
import { calculateRange } from '../../services/calculate-range';
import { PaginationNumber } from '../pagination/pagination-number';
import { PaginationContext } from '../../services/pagination-context';
export var TableFooter = function (_a) {
    var data = _a.data, entries = _a.entries;
    var pageNo = useContext(PaginationContext).value;
    var setPageNo = useContext(PaginationContext).setValue;
    return (React.createElement("div", { className: "table-footer" },
        React.createElement("div", { className: "dataTables-info", role: "status", "aria-live": "polite" },
            "Showing ",
            entries * pageNo - entries + 1,
            " to ",
            entries * pageNo,
            " of",
            ' ',
            data.length,
            " entries"),
        React.createElement("div", { className: "paginate-container" },
            pageNo > 1 ? (React.createElement(PaginationButton, { content: "Previous", onClickEvent: function () { return setPageNo(pageNo - 1); } })) : (React.createElement(PaginationButton, { content: "Previous" })),
            React.createElement(PaginationNumber, { data: data, entries: entries }),
            pageNo < calculateRange(data, entries).length ? (React.createElement(PaginationButton, { content: "Next", onClickEvent: function () { return setPageNo(pageNo + 1); } })) : (React.createElement(PaginationButton, { content: "Next" })))));
};
