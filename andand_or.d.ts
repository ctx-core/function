import { andand_name_type } from './andand';
/**
 * Returns `andand(obj, name_a1) || or_fn(obj, val)`
 */
export declare function andand_or<O = unknown, R = unknown>(obj: O, name_a1: andand_name_type<O, R>[], or_fn: andand_or_fn_type<O, R>): O | R;
export declare type andand_or_fn_type<O = unknown, R = unknown> = (val: O | R, obj: O) => R;
export { andand_or as andand__or };
