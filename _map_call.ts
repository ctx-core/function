import { map_call } from './map_call'
import { concat } from './concat'
/**
 * Returns function that maps calls to fn_al ...arg_a1 concat with ...a1__args__ passed to function
 */
export function _map_call(fn_a1, ...arg_a1) {
	return (...arg_a1_)=>map_call(fn_a1, ...concat(arg_a1, arg_a1_))
}
export const _call__map = _map_call
