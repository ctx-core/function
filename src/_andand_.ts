import { andand_ } from './andand_'
import type { andand_key_fn_T } from './andand'
/**
 * Returns a function that calls `andand_(obj, ...name_a1)`
 */
export function _andand_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(...name_a1: andand_key_fn_T<I>[]) {
	return (obj: I) => andand_<I, O>(obj, ...name_a1)
}
export {
	_andand_ as _fn__andand__fn
}
