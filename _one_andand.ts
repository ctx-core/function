import { andand, andand_name_type } from './andand'
/**
 * Returns a function that calls `andand(obj, ...name_a1)`
 */
export function _one_andand<I, O = unknown>(...name_a1: andand_name_type<I, O>[]) {
	return ((obj: I)=>andand<I, O>(obj, ...name_a1)) as _one_andand_type<I, O>
}
export const _andand = _one_andand
export const _andand__one = _one_andand
export type _one_andand_type<I, O = unknown> = (obj: I) => O
