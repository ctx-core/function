import type { andand_name_fn_type } from './andand';
/**
 * Returns a function that calls `andand_(obj, ...name_a1)`
 */
export declare function _andand_</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(...name_a1: andand_name_fn_type<I, O>[]): (obj: I) => I | O;
export { _andand_ as _fn__andand__fn };
