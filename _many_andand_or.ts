import { andand_or } from './andand_or'
export function _many_andand_or(name_a1, or_fn) {
	return (obj, ...arg_a1)=>andand_or(obj, arg_a1.concat(name_a1), or_fn)
}
export const _andand_or__many = _many_andand_or
export const _andand__or__many = _andand_or__many
