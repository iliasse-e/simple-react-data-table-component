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
exports.PaginationNumber = void 0;
var calculate_range_1 = require("../../services/calculate-range");
var pagination_context_1 = require("../../services/pagination-context");
var table_color_context_1 = require("../../services/table-color-context");
var react_1 = __importStar(require("react"));
var PaginationNumber = function (_a) {
    var data = _a.data, entries = _a.entries;
    var bgColor = (0, react_1.useContext)(table_color_context_1.TableColor).value;
    var pageNo = (0, react_1.useContext)(pagination_context_1.PaginationContext).value;
    var setPageNo = (0, react_1.useContext)(pagination_context_1.PaginationContext).setValue;
    return (react_1.default.createElement("span", { "data-testid": "pagination-btn-container" }, (0, calculate_range_1.calculateRange)(data, entries).map(function (btn) { return (react_1.default.createElement("button", { className: btn === pageNo ? 'active' : '', style: btn === pageNo ? { backgroundColor: bgColor } : {}, "aria-controls": "data-table", key: btn, onClick: function () { return setPageNo(btn); } }, btn)); })));
};
exports.PaginationNumber = PaginationNumber;
