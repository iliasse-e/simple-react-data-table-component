export declare enum FormatType {
    'DD/MM/YYYY' = 0,
    'MM/DD/YYYY' = 1,
    'MM/YYYY' = 2
}
/**
 * Converts a Date to a string of this format : 'DD/MM/YYYY',
  'MM/DD/YYYY',
  'MM/YYYY'
 * @param input input Date format
 * @param type output format of date selected (UK, US)
 * @returns formated stringify date with the chosen format
 */
export declare const convertDate: (input: Date, type?: FormatType) => string;
