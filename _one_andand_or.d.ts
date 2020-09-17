import type { andand_or_fn_type } from './andand_or';
import type { andand_name_type } from './andand';
/**
 * Returns function that calls `andand_or(obj, name_a1, or_fn)`
 */
export declare function _one_andand_or<O = unknown, R = unknown>(name_a1: andand_name_type<O, R>[], or_fn: andand_or_fn_type<O, R>): (obj: O) => O | R;
export declare const _andand_or: typeof _one_andand_or;
export declare const _andand__or: typeof _one_andand_or;
export declare const _andand_or__one: typeof _one_andand_or;
export declare const _andand__or__one: typeof _one_andand_or;
