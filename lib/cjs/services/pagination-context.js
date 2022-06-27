"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationContext = void 0;
var react_1 = require("react");
exports.PaginationContext = (0, react_1.createContext)({
    value: 1,
    setValue: null,
});
