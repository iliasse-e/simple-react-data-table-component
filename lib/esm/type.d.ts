export interface Column {
    title: string;
    data: string;
    type?: TYPE;
}
export interface HandleSort {
    (by: string, order: 'up' | 'down'): void;
}
export interface TableProps {
    columns: Column[];
    data: Array<{
        [key: string]: any;
    }>;
    entries?: number;
    pageNo?: number;
}
export declare enum TYPE {
    string = "STRING",
    number = "NUMBER",
    date = "DATE"
}
declare type RGB = `rgb(${number}, ${number}, ${number})`;
declare type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
declare type HEX = `#${string}`;
export declare type Color = RGB | RGBA | HEX;
export {};
