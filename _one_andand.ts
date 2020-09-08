import { andand } from './andand'
/**
 * Returns a function that calls `andand(obj, ...name_a1)`
 */
export function _one_andand(...name_a1) {
	return (obj)=>andand(obj, ...name_a1)
}
export const _andand = _one_andand
export const _andand__one = _one_andand
