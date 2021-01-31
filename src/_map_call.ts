import { map_call } from './map_call'
import { concat } from './concat'
import type { map_fn_type } from './map_fn_type'
/**
 * Returns function that maps calls to fn_al ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export function _map_call<R = unknown>(fn_a1: map_fn_type<R>[], ...in_arg_a1: unknown[]) {
	return (...fn_arg_a1: unknown[])=>map_call<R>(fn_a1, ...concat(in_arg_a1, fn_arg_a1))
}
export const _call__map = _map_call
