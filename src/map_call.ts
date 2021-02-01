import type { map_fn_type } from './map_fn_type'
/**
 * Returns the map of calls to fn_a1 with ...arg_a1.
 */
export function map_call<I extends unknown = unknown>(
	fn_a1:map_fn_type<I>[], ...arg_a1:unknown[]
) {
	return fn_a1.map(fn=>fn(...arg_a1)) as I[]
}
export {
	map_call as call__map
}