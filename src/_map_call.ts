import { map_call } from './map_call'
import { concat } from './concat'
import type { map_fn_T } from './map_fn_T'
/**
 * Returns function that maps calls to fn_al ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export function _map_call<I extends unknown = unknown>(fn_a1:map_fn_T<I>[], ...in_arg_a1:unknown[]) {
	return (...fn_arg_a1:unknown[])=>map_call<I>(fn_a1, ...concat(in_arg_a1, fn_arg_a1))
}
export {
	_map_call as _call__map
}
