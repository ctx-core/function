import { andand, andand_name_type } from './andand'
/**
 * Returns a function that calls `andand(obj, ...name_a1)`
 */
export function _one_andand<I extends unknown = unknown, O extends unknown = unknown>(
	...name_a1:andand_name_type<I, O>[]
) {
	return ((obj:I)=>andand<I, O>(obj, ...name_a1)) as _one_andand_type<I, O>
}
export type _one_andand_type<I, O = unknown> = (obj:I)=>O
export {
	_one_andand as _andand,
	_one_andand as _andand__one,
}
