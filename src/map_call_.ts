import { map_call } from './map_call'
import { concat } from './concat'
import type { map_fn_T } from './map_fn_T'
/**
 * Returns function that maps calls to fn_al ...fac_arg_a concat with ...fn_arg_a passed to function
 */
export function map_call_<I extends unknown = unknown>(
	fn_a:map_fn_T<I>[], ...fac_arg_a:unknown[]
) {
	return (...fn_arg_a:unknown[])=>map_call<I>(fn_a, ...concat(fac_arg_a, fn_arg_a))
}
export {
	map_call_ as map_a_call_fn,
	map_call_ as map_a1_call_fn,
	map_call_ as _map_call,
	map_call_ as _call__map,
}
