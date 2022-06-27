import React from 'react';
import './table-dropdown.css';
export var TableDropdown = function (_a) {
    var setEntries = _a.setEntries, setPageNo = _a.setPageNo;
    return (React.createElement("div", { className: "table-dropdown", id: "data-table_length" },
        React.createElement("label", null,
            "Show",
            React.createElement("select", { "data-testid": "table-dropdown", name: "data-table_length", "aria-controls": "data-table", className: "dataTables_select", onChange: function (option) {
                    setEntries(option.target.value);
                    setPageNo(1);
                } },
                React.createElement("option", { value: "10" }, "10"),
                React.createElement("option", { value: "25" }, "25"),
                React.createElement("option", { value: "50" }, "50"),
                React.createElement("option", { value: "100" }, "100")),
            "entries")));
};
