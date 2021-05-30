import { andandfn } from './andandfn'
import type { andand_key_fn_T } from './andand'
/**
 * Returns a function that calls `andand_(obj, ...name_a)`
 */
export function andandfn_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(...name_a: andand_key_fn_T<I>[]) {
	return (obj: I) => andandfn<I, O>(obj, ...name_a)
}
export {
	andandfn_ as _andand_,
	andandfn_ as _fn__andand__fn,
}
