import { andand_or } from './andand_or'
/**
 * Returns function that calls `andand_or(obj, name_a1, or_fn)`
 */
export function _one_andand_or(name_a1, or_fn) {
	return (obj)=>andand_or(obj, name_a1, or_fn)
}
export const _andand_or = _one_andand_or
export const _andand__or = _one_andand_or
export const _andand_or__one = _one_andand_or
export const _andand__or__one = _one_andand_or
