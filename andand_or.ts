import { andand, andand_name_type } from './andand'
/**
 * Returns `andand(obj, name_a1) || or_fn(obj, val)`
 */
export function andand_or</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>(/*@formatter:on*/
	obj: I, name_a1: andand_name_type<I, O>[], or_fn: andand_or_fn_type<I, O>
) {
	const val = andand<I, O>(obj, ...name_a1)
	return val || or_fn(val, obj)
}
export type andand_or_fn_type<I extends unknown = unknown, O extends unknown = unknown> =
	(val: I|O, obj: I) => O
export {
	andand_or as andand__or
}
