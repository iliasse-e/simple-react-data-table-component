import React from 'react';
import { Column } from '../../type';
import './table-body.css';
interface TableBodyProps {
    fields: any[];
    pageNo: number;
    entries: number;
    columns: Column[];
}
/**
 * Renders table body that fits into a table
 * Converts Date types into string formated type (no need to convert already)
 * @param param0
 * @returns tbody
 */
export declare const TableBody: React.FC<TableBodyProps>;
export {};
