/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export declare function andand<I extends unknown, O extends unknown>(obj: I, ...name_a1: andand_name_type<I, O>[]): I | O;
export declare type andand_name_fn_type<I, O> = (val: I | O) => I | O;
export declare type andand_name_type<I, O> = string | number | andand_name_fn_type<I, O>;
