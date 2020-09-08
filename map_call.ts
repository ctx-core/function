/**
 * Returns the map of calls to fn_a1 with ...arg_a1.
 */
export function map_call(fn_a1, ...arg_a1) {
	return fn_a1.map(fn => fn(...arg_a1))
}
export const call__map = map_call
