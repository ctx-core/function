/** @typedef {import('../_types').call_fn_T}call_fn_T */
/**
 * Returns function that applies in_arg_a with ...fn_arg_a
 * @param fn{call_fn_T}
 * @param in_arg_a{unknown[]}
 * @returns {import('../_types').bind_call_T}
 */
export function apply_(fn, in_arg_a = []) {
	return (...fn_arg_a)=>fn(...[
		...in_arg_a,
		...fn_arg_a
	])
}
export { apply_ as _apply, }
