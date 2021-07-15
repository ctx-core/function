import { andand, andand_key_T } from './andand.js'
/**
 * Returns a function that calls `andand(obj, ...name_a)`
 */
export function one_andand_<Val extends unknown = unknown, Out extends unknown = unknown>(
	...name_a:andand_key_T<Val>[]
):(obj:Val)=>Out|null {
	return ((obj:Val)=>andand<Val, Out>(obj, ...name_a))
}
export {
	one_andand_ as andand_,
	one_andand_ as _one_andand,
	one_andand_ as _andand,
	one_andand_ as _andand__one,
}
