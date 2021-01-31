import { andand_or, andand_or_fn_type } from './andand_or'
import type { andand_name_type } from './andand'
export function _many_andand_or<O = unknown, R = unknown>(name_a1: andand_name_type<O, R>[], or_fn: andand_or_fn_type<O, R>) {
	return (obj: O, ...arg_a1: andand_name_type<O, R>[])=>andand_or(obj, arg_a1.concat(name_a1), or_fn)
}
export const _andand_or__many = _many_andand_or
export const _andand__or__many = _andand_or__many
