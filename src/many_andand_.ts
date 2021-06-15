import { andand, andand_key_fn_T } from './andand'
export function many_andand_<Val extends unknown = unknown>(
	...name_a:(keyof Val|andand_key_fn_T<Val>)[]
):many_andand_T<Val> {
	return (obj:Val, ...arg_a:(keyof Val|andand_key_fn_T<Val>)[])=>
		andand(obj, ...arg_a, ...name_a)
}
export {
	many_andand_ as _many_andand,
	many_andand_ as _andand__many,
}
export type many_andand_T<Val extends unknown = unknown> =
	(obj:Val, ...arg_a:(keyof Val|andand_key_fn_T<Val>)[])=>
		Val|null
