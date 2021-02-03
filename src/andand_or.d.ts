import { andand_name_type } from './andand';
/**
 * Returns `andand(obj, name_a1) || or_fn(obj, val)`
 */
export declare function andand_or</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(/*@formatter:on*/ obj: I, name_a1: andand_name_type<I, O>[], or_fn: andand_or_fn_type<I, O>): O;
export declare type andand_or_fn_type<I extends unknown = unknown, O extends unknown = unknown> = (val: I | O, obj: I) => O;
export { andand_or as andand__or };
