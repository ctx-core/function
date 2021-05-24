import { andand, andand_key_T } from './andand'
/**
 * Returns a function that calls `andand(obj, ...name_a1)`
 */
export function _one_andand<Val extends unknown = unknown, Out extends unknown = unknown>(
	...name_a1:andand_key_T<Val>[]
):(obj:Val)=>Out|null {
	return ((obj:Val)=>andand<Val, Out>(obj, ...name_a1))
}
export { _one_andand as _andand, _one_andand as _andand__one, }
