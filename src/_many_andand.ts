import { andand, andand_key_fn_T } from './andand'
export function _many_andand<Val extends unknown = unknown>(
	...name_a1:(keyof Val|andand_key_fn_T<Val>)[]
) {
	return (obj:Val, ...arg_a1:(keyof Val|andand_key_fn_T<Val>)[])=>
		andand(obj, ...arg_a1, ...name_a1)
}
export { _many_andand as _andand__many }
