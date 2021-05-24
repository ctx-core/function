import { andand_or } from './andand_or'
import type { andand_or_fn_T } from './andand_or'
import type { andand_key_T } from './andand'
/**
 * Returns function that calls `andand_or(obj, name_a1, or_fn)`
 */
export function _one_andand_or</*@formatter:off*/
	In extends unknown = unknown,
	Out extends unknown = unknown
>(/*@formatter:on*/
	name_a1: andand_key_T<In>[], or_fn:
		andand_or_fn_T<In, Out>
) {
	return (obj: In) => andand_or<In, Out>(obj, name_a1, or_fn)
}
export {
	_one_andand_or as _andand_or,
	_one_andand_or as _andand__or,
	_one_andand_or as _andand_or__one,
	_one_andand_or as _andand_or__or__one,
}
