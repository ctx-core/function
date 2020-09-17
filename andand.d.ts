/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export declare function andand<I = unknown, O = unknown>(obj: I, ...name_a1: andand_name_type<I, O>[]): I | O;
export declare type andand_name_fn_type<I = unknown, O = unknown> = ((val: I | O) => O);
export declare type andand_name_type<I = unknown, O = unknown> = string | number | andand_name_fn_type<I, O>;
