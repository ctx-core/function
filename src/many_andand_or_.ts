import { andand_or, andand_or_T } from './andand_or'
import type { andand_key_T } from './andand'
export function many_andand_or_<Val extends unknown = unknown, Out extends unknown = unknown>(
	name_a:andand_key_T<Val>[], or_:andand_or_T<Val, Out>
) {
	return (obj:Val, ...arg_a:andand_key_T<Val>[])=>
		andand_or(obj, arg_a.concat(name_a), or_)
}
export {
	many_andand_or_ as _many_andand_or,
	many_andand_or_ as _andand_or__many,
	many_andand_or_ as _andand__or__many,
}
