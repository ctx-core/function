import type { andand_name_type } from './andand';
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 */
export declare function andand_<I extends unknown = unknown, O extends unknown = unknown>(obj: I, ...name_a1: andand_name_type<I, O>[]): I | O;
export { andand_ as andand__fn };
