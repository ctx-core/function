import { andand } from './andand'
import type { andand_name_type } from './andand'
export function _many_andand<I extends unknown = unknown, O extends unknown = unknown>(
	...name_a1:andand_name_type<I, O>[]
) {
	return (obj:I, ...arg_a1:andand_name_type<I, O>[])=>andand<I, O>(obj, ...arg_a1, ...name_a1)
}
export {
	_many_andand as _andand__many
}