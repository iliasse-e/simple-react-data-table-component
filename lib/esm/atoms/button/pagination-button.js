import { TableColor } from '../../services/table-color-context';
import { useContext } from 'react';
import './pagination-button.css';
import React from 'react';
export var PaginationButton = function (_a) {
    var content = _a.content, onClickEvent = _a.onClickEvent;
    var bgColor = useContext(TableColor).value;
    return (React.createElement("a", { className: 'paginate-button ' + content, style: { color: bgColor }, "aria-controls": "employee-table", "data-dt-idx": "0", onClick: onClickEvent }, content));
};
