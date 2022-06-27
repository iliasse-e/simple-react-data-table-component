/// <reference types="react" />
interface ContextType {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>> | any;
}
export declare const PaginationContext: React.Context<ContextType>;
export {};
