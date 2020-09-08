import { concat } from './concat'
/**
 * Returns function bound to self that returns map of fn_al calls with ...arg_a1 concat with ...a1__args__ passed to function
 */
export function _bind_map_call(fn_a1, self, ...arg_a1) {
	return (...arg_a1_)=>fn_a1.map(fn => fn.call(self, ...concat(arg_a1, arg_a1_)))
}
export const _call__map__bind = _bind_map_call
