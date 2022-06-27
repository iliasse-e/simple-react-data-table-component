"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableDropdown = void 0;
var react_1 = __importDefault(require("react"));
require("./table-dropdown.css");
var TableDropdown = function (_a) {
    var setEntries = _a.setEntries, setPageNo = _a.setPageNo;
    return (react_1.default.createElement("div", { className: "table-dropdown", id: "data-table_length" },
        react_1.default.createElement("label", null,
            "Show",
            react_1.default.createElement("select", { "data-testid": "table-dropdown", name: "data-table_length", "aria-controls": "data-table", className: "dataTables_select", onChange: function (option) {
                    setEntries(option.target.value);
                    setPageNo(1);
                } },
                react_1.default.createElement("option", { value: "10" }, "10"),
                react_1.default.createElement("option", { value: "25" }, "25"),
                react_1.default.createElement("option", { value: "50" }, "50"),
                react_1.default.createElement("option", { value: "100" }, "100")),
            "entries")));
};
exports.TableDropdown = TableDropdown;
