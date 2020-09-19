import { andand_name_type } from './andand';
/**
 * Returns a function that calls `andand(obj, ...name_a1)`
 */
export declare function _one_andand<I, O = unknown>(...name_a1: andand_name_type<I, O>[]): _one_andand_type<I, O>;
export declare const _andand: typeof _one_andand;
export declare const _andand__one: typeof _one_andand;
export declare type _one_andand_type<I, O = unknown> = (obj: I) => O;
