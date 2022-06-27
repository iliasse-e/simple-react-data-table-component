import React from 'react';
import './template.css';
import '../molecules/pagination/pagination.css';
import { Color, Column } from './type';
interface TableTemplateProps {
    dataInput: Array<{
        [key: string]: any;
    }>;
    columns: Column[];
    color: Color;
}
/**
 * Root of the data table package
 */
export declare const TableTemplate: React.FC<TableTemplateProps>;
export {};
