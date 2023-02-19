/**
 * Returns the map of calls to fn_a with ...arg_a.
 * @param {import('../_types').map_fn_T[]}fn_a
 * @param {unknown}arg_a
 * @returns {unknown[]}
 */
export function map_call(fn_a, ...arg_a) {
	return fn_a.map((fn)=>fn(...arg_a))
}
export { map_call as call__map }
