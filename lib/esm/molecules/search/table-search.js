import React, { useState } from 'react';
import './table-search.css';
export var TableSearch = function (_a) {
    var handleSearch = _a.handleSearch;
    var _b = useState(''), value = _b[0], setValue = _b[1];
    return (React.createElement("div", { className: "table-search-container" },
        React.createElement("label", null,
            "Search :",
            React.createElement("input", { value: value, "data-testid": "search", type: "search", className: "search-data", placeholder: "Search data", "aria-controls": "data-table", onChange: function (e) {
                    handleSearch(e.target.value);
                    setValue(e.target.value);
                } }))));
};
