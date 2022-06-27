import { calculateRange } from '../../services/calculate-range';
import { PaginationContext } from '../../services/pagination-context';
import { TableColor } from '../../services/table-color-context';
import React, { useContext } from 'react';
export var PaginationNumber = function (_a) {
    var data = _a.data, entries = _a.entries;
    var bgColor = useContext(TableColor).value;
    var pageNo = useContext(PaginationContext).value;
    var setPageNo = useContext(PaginationContext).setValue;
    return (React.createElement("span", { "data-testid": "pagination-btn-container" }, calculateRange(data, entries).map(function (btn) { return (React.createElement("button", { className: btn === pageNo ? 'active' : '', style: btn === pageNo ? { backgroundColor: bgColor } : {}, "aria-controls": "data-table", key: btn, onClick: function () { return setPageNo(btn); } }, btn)); })));
};
