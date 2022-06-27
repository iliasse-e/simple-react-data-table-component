"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationButton = void 0;
var table_color_context_1 = require("../../services/table-color-context");
var react_1 = require("react");
require("./pagination-button.css");
var react_2 = __importDefault(require("react"));
var PaginationButton = function (_a) {
    var content = _a.content, onClickEvent = _a.onClickEvent;
    var bgColor = (0, react_1.useContext)(table_color_context_1.TableColor).value;
    return (react_2.default.createElement("a", { className: 'paginate-button ' + content, style: { color: bgColor }, "aria-controls": "employee-table", "data-dt-idx": "0", onClick: onClickEvent }, content));
};
exports.PaginationButton = PaginationButton;
