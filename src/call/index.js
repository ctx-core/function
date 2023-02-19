/** @typedef {import('../_types').call_fn_T}call_fn_T */
/**
 * Calls the fn with ...arg_a.
 * @param {call_fn_T}fn
 * @param {unknown}arg_a
 * @returns {unknown}
 */
export function call(fn, ...arg_a) {
	return fn(...arg_a)
}
