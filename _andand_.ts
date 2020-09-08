import { andand_ } from './andand_'
/**
 * Returns a function that calls `andand_(obj, ...name_a1)`
 */
export function _andand_(...name_a1) {
	return obj=>andand_(obj, ...name_a1)
}
export const _fn__andand__fn = _andand_
