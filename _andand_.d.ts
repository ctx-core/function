import type { andand_name_fn_type } from './andand';
/**
 * Returns a function that calls `andand_(obj, ...name_a1)`
 */
export declare function _andand_<I = unknown, O = unknown>(...name_a1: andand_name_fn_type<I, O>[]): (obj: I) => I | O;
export declare const _fn__andand__fn: typeof _andand_;
