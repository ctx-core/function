import { andand_or } from './andand_or'
import type { andand_or_fn_type } from './andand_or'
import type { andand_name_type } from './andand'
/**
 * Returns function that calls `andand_or(obj, name_a1, or_fn)`
 */
export function _one_andand_or<O = unknown, R = unknown>(name_a1: andand_name_type<O, R>[], or_fn: andand_or_fn_type<O, R>) {
	return (obj: O)=>andand_or<O, R>(obj, name_a1, or_fn)
}
export const _andand_or = _one_andand_or
export const _andand__or = _one_andand_or
export const _andand_or__one = _one_andand_or
export const _andand__or__one = _one_andand_or
