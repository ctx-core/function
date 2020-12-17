import { andand, andand_name_type } from './andand'
/**
 * Returns `andand(obj, name_a1) || or_fn(obj, val)`
 */
export function andand_or<O = unknown, R = unknown>(obj:O, name_a1:andand_name_type<O, R>[], or_fn:andand_or_fn_type<O, R>) {
	const val = andand<O, R>(obj, ...name_a1)
	return val || or_fn(val, obj)
}
export type andand_or_fn_type<O = unknown, R = unknown> = (val:O|R, obj:O)=>R
export {
	andand_or as andand__or
}
