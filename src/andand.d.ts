/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export declare function andand<I extends unknown, O extends unknown>(obj: I, ...name_a1: andand_name_type<I, O>[]): I | O;
export declare type andand_name_fn_type<I extends unknown, O extends unknown> = (val: I | O) => I | O;
export declare type andand_name_type<I extends unknown, O extends unknown> = string | number | andand_name_fn_type<I, O>;
