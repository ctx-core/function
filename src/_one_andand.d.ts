import { andand_name_type } from './andand';
/**
 * Returns a function that calls `andand(obj, ...name_a1)`
 */
export declare function _one_andand<I, O = unknown>(...name_a1: andand_name_type<I, O>[]): _one_andand_type<I, O>;
export declare type _one_andand_type<I, O = unknown> = (obj: I) => O;
export { _one_andand as _andand, _one_andand as _andand__one, };
