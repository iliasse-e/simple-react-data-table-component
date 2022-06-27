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
exports.TableTemplate = void 0;
var react_1 = __importStar(require("react"));
var table_1 = require("./organisms/table");
require("./template.css");
require("../molecules/pagination/pagination.css");
var table_dropdown_1 = require("./molecules/dropdown/table-dropdown");
var table_search_1 = require("./molecules/search/table-search");
var table_footer_1 = require("./molecules/footer/table-footer");
var pagination_context_1 = require("./services/pagination-context");
var table_color_context_1 = require("./services/table-color-context");
/**
 * Root of the data table package
 */
var TableTemplate = function (_a) {
    var dataInput = _a.dataInput, columns = _a.columns, color = _a.color;
    var _b = (0, react_1.useState)(10), entries = _b[0], setEntries = _b[1];
    var _c = (0, react_1.useState)(1), pageNo = _c[0], setPageNo = _c[1];
    var _d = (0, react_1.useState)(dataInput), data = _d[0], setData = _d[1];
    var handleSearch = function (word) {
        var res = dataInput.filter(function (element) {
            return JSON.stringify(Object.values(element))
                .toLocaleLowerCase()
                .includes(word.toLocaleLowerCase());
        });
        setData(res);
        setPageNo(1);
    };
    return (react_1.default.createElement(table_color_context_1.TableColor.Provider, { value: { value: color } },
        react_1.default.createElement(pagination_context_1.PaginationContext.Provider, { value: { value: pageNo, setValue: setPageNo } },
            react_1.default.createElement("section", { className: "table-section-container" },
                react_1.default.createElement("div", { className: "table-header" },
                    react_1.default.createElement(table_dropdown_1.TableDropdown, { setEntries: setEntries, setPageNo: setPageNo }),
                    react_1.default.createElement(table_search_1.TableSearch, { handleSearch: handleSearch })),
                react_1.default.createElement(table_1.Table, { columns: columns, data: data, entries: entries, pageNo: pageNo }),
                react_1.default.createElement(table_footer_1.TableFooter, { data: data, entries: entries })))));
};
exports.TableTemplate = TableTemplate;
