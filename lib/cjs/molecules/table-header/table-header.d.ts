import React from 'react';
import { Column, HandleSort } from '../../type';
import './table-header.css';
interface TableHeaderProps {
    columns: Column[];
    onclick: HandleSort;
}
/**
 * Sets the header's table
 * Called in table component
 * @param props {Array} names of employee's categories
 * @returns table header
 */
export declare const TableHeader: React.FC<TableHeaderProps>;
export {};
