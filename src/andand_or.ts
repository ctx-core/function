import { andand, andand_key_T } from './andand'
/**
 * Returns `andand(obj, name_a1) || or_fn(obj, val)`
 */
export function andand_or</*@formatter:off*/
	Val extends unknown = unknown,
	Out extends unknown = unknown
>(/*@formatter:on*/
	obj:Val, name_a1:andand_key_T<Val>[], or_fn:andand_or_fn_T<Val, Out>
):Out|null {
	const val = andand<Val, Out>(obj, ...name_a1)
	return val || or_fn(val, obj)
}
export type andand_or_fn_T<Val extends unknown = unknown, Out extends unknown = unknown> =
	(val:Out|null, obj:Val)=>Out
export {
	andand_or as andand__or
}
