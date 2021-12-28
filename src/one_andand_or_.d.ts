import type { andand_key_T } from './andand.js'
import type { andand_or_T } from './andand_or.js'
/**
 * Returns function that calls `andand_or(obj, name_a, or_fn)`
 */
export declare function one_andand_or_<In extends unknown = unknown, Out extends unknown = unknown>(/*@formatter:on*/ name_a: andand_key_T<In>[], or_fn: andand_or_T<In, Out>): (obj: In) => Out;
export { one_andand_or_ as andand_or_, one_andand_or_ as _one_andand_or, one_andand_or_ as _andand_or, one_andand_or_ as _andand__or, one_andand_or_ as _andand_or__one, one_andand_or_ as _andand_or__or__one, };
