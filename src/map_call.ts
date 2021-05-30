import type { map_fn_T } from './map_fn_T'
/**
 * Returns the map of calls to fn_a with ...arg_a.
 */
export function map_call<I extends unknown = unknown>(
	fn_a:map_fn_T<I>[], ...arg_a:unknown[]
) {
	return fn_a.map(fn=>fn(...arg_a)) as I[]
}
export {
	map_call as call__map
}
