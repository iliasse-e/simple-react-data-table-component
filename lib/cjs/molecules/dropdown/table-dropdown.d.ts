import React from 'react';
import './table-dropdown.css';
interface TableDropdownProps {
    setEntries: React.Dispatch<React.SetStateAction<number>>;
    setPageNo: React.Dispatch<React.SetStateAction<number>>;
}
export declare const TableDropdown: React.FC<TableDropdownProps>;
export {};
