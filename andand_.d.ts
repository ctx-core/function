import type { andand_name_type } from './andand';
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 */
export declare function andand_<I = unknown, O = unknown>(obj: I, ...name_a1: andand_name_type<I, O>[]): I | O;
export declare const andand__fn: typeof andand_;
