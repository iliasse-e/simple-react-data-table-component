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
exports.TableSearch = void 0;
var react_1 = __importStar(require("react"));
require("./table-search.css");
var TableSearch = function (_a) {
    var handleSearch = _a.handleSearch;
    var _b = (0, react_1.useState)(''), value = _b[0], setValue = _b[1];
    return (react_1.default.createElement("div", { className: "table-search-container" },
        react_1.default.createElement("label", null,
            "Search :",
            react_1.default.createElement("input", { value: value, "data-testid": "search", type: "search", className: "search-data", placeholder: "Search data", "aria-controls": "data-table", onChange: function (e) {
                    handleSearch(e.target.value);
                    setValue(e.target.value);
                } }))));
};
exports.TableSearch = TableSearch;
