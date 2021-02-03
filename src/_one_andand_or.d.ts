import type { andand_or_fn_type } from './andand_or';
import type { andand_name_type } from './andand';
/**
 * Returns function that calls `andand_or(obj, name_a1, or_fn)`
 */
export declare function _one_andand_or</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(/*@formatter:on*/ name_a1: andand_name_type<I, O>[], or_fn: andand_or_fn_type<I, O>): (obj: I) => O;
export { _one_andand_or as _andand_or, _one_andand_or as _andand__or, _one_andand_or as _andand_or__one, _one_andand_or as _andand_or__or__one, };
