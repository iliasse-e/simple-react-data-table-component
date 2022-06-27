/**
 *
 * @param data array of data
 * @param by category to sort (exemple: "animals", "age" or "name")
 * @param order descending or ascending
 * @returns new array with sorted data
 */
export declare const SortedTable: (data: {
    [key: string]: any;
}[], by: string, order: 'up' | 'down') => {
    [key: string]: any;
}[];
