import { andand_key_T } from './andand.js'
/**
 * Returns `andand(obj, name_a) || or_fn(obj, val)`
 */
export declare function andand_or<Val extends unknown = unknown, Out extends unknown = unknown>(/*@formatter:on*/ obj: Val, name_a: andand_key_T<Val>[], or_fn: andand_or_T<Val, Out>): Out;
export declare type andand_or_T<Val extends unknown = unknown, Out extends unknown = unknown> = (val: Out | null, obj: Val) => Out;
export { andand_or as andand__or };
