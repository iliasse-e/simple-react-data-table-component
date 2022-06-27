"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableFooter = void 0;
var react_1 = __importStar(require("react"));
var pagination_button_1 = require("../../atoms/button/pagination-button");
var calculate_range_1 = require("../../services/calculate-range");
var pagination_number_1 = require("../pagination/pagination-number");
var pagination_context_1 = require("../../services/pagination-context");
var TableFooter = function (_a) {
    var data = _a.data, entries = _a.entries;
    var pageNo = (0, react_1.useContext)(pagination_context_1.PaginationContext).value;
    var setPageNo = (0, react_1.useContext)(pagination_context_1.PaginationContext).setValue;
    return (react_1.default.createElement("div", { className: "table-footer" },
        react_1.default.createElement("div", { className: "dataTables-info", role: "status", "aria-live": "polite" },
            "Showing ",
            entries * pageNo - entries + 1,
            " to ",
            entries * pageNo,
            " of",
            ' ',
            data.length,
            " entries"),
        react_1.default.createElement("div", { className: "paginate-container" },
            pageNo > 1 ? (react_1.default.createElement(pagination_button_1.PaginationButton, { content: "Previous", onClickEvent: function () { return setPageNo(pageNo - 1); } })) : (react_1.default.createElement(pagination_button_1.PaginationButton, { content: "Previous" })),
            react_1.default.createElement(pagination_number_1.PaginationNumber, { data: data, entries: entries }),
            pageNo < (0, calculate_range_1.calculateRange)(data, entries).length ? (react_1.default.createElement(pagination_button_1.PaginationButton, { content: "Next", onClickEvent: function () { return setPageNo(pageNo + 1); } })) : (react_1.default.createElement(pagination_button_1.PaginationButton, { content: "Next" })))));
};
exports.TableFooter = TableFooter;
