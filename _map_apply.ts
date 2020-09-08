import { concat } from './concat'
/**
 * Returns function that returns map of calls to fn_a1 applying arg_a1 with ...arg_a1_
 */
export function _map_apply(fn_a1, arg_a1 = []) {
	return (...arg_a1_)=>fn_a1.map(fn => fn(...concat(arg_a1, arg_a1_)))
}
export const _apply__map = _map_apply
