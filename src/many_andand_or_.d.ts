import type { andand_key_T } from './andand.js'
import { andand_or_T } from './andand_or.js'
export declare function many_andand_or_<Val extends unknown = unknown, Out extends unknown = unknown>(name_a:andand_key_T<Val>[], or_:andand_or_T<Val, Out>):many_andand_or_T<Val, Out>;
export declare type many_andand_or_T<Val extends unknown = unknown, Out extends unknown = unknown> = (obj:Val, ...arg_a:andand_key_T<Val>[])=>Out;
export {
	many_andand_or_ as _many_andand_or,
	many_andand_or_ as _andand_or__many,
	many_andand_or_ as _andand__or__many,
}
