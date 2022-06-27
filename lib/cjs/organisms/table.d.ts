import { TableProps } from '../type';
import './table.css';
import React from 'react';
/**
 * Renders table of data
 * @param { Column[] } obj.columns column labels to fill thead
 * @param { TableProps.data } obj.data data to fill the tbody
 * @param { number } obj.entries sets the number of rows to show (10, 25 or any number of lines)
 * @returns table of data
 */
export declare const Table: React.FC<TableProps>;
