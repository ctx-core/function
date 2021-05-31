import { andand_or } from './andand_or'
import type { andand_or_T } from './andand_or'
import type { andand_key_T } from './andand'
/**
 * Returns function that calls `andand_or(obj, name_a, or_fn)`
 */
export function one_andand_or_</*@formatter:off*/
	In extends unknown = unknown,
	Out extends unknown = unknown
>(/*@formatter:on*/
	name_a:andand_key_T<In>[], or_fn:
		andand_or_T<In, Out>
) {
	return (obj:In)=>andand_or<In, Out>(obj, name_a, or_fn)
}
export {
	one_andand_or_ as andand_or_,
	one_andand_or_ as _one_andand_or,
	one_andand_or_ as _andand_or,
	one_andand_or_ as _andand__or,
	one_andand_or_ as _andand_or__one,
	one_andand_or_ as _andand_or__or__one,
}
