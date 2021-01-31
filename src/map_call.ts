import type { map_fn_type } from './map_fn_type'
/**
 * Returns the map of calls to fn_a1 with ...arg_a1.
 */
export function map_call<R = unknown>(fn_a1:map_fn_type<R>[], ...arg_a1: unknown[]) {
	return fn_a1.map(fn=>fn(...arg_a1)) as R[]
}
export const call__map = map_call
