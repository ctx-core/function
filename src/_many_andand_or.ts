import { andand_or, andand_or_fn_T } from './andand_or'
import type { andand_key_T } from './andand'
export function _many_andand_or<Val extends unknown = unknown, Out extends unknown = unknown>(
	name_a1:andand_key_T<Val>[], or_fn:andand_or_fn_T<Val, Out>
) {
	return (obj:Val, ...arg_a1:andand_key_T<Val>[])=>andand_or(obj, arg_a1.concat(name_a1), or_fn)
}
export {
	_many_andand_or as _andand_or__many,
	_many_andand_or as _andand__or__many
}
