import React from 'react';
interface PaginationNumberProps {
    data: Array<{
        [key: string]: any;
    }>;
    entries: number;
}
export declare const PaginationNumber: React.FC<PaginationNumberProps>;
export {};
