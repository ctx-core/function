import { andandfn, andandfn_T } from './andandfn.js'
import type { andand_key_T } from './andand.js'
/**
 * Returns a function that calls `andand_(obj, ...name_a)`
 */
export function andandfn_</*@formatter:off*/
	In extends unknown = unknown,
	Out extends unknown = unknown
>/*@formatter:on*/(
	...name_a:andand_key_T<In>[]
):andandfn_T<In, Out> {
	return (obj:In)=>andandfn<In, Out>(obj, ...name_a)
}
export {
	andandfn_ as _andand_,
	andandfn_ as _fn__andand__fn,
}
