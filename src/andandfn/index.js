/** @typedef {import('../andand').andand_key_T}andand_key_T */
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 * @param obj{unknown}
 * @param name_a{andand_key_T}
 * @returns {unknown}
 */
export function andandfn(obj, ...name_a) {
	let out_value = obj
	for (let i = 0; i < name_a.length; i++) {
		if (!out_value) break
		const segment = name_a[i]
		let in_value =
			out_value
			? out_value[segment]
			: typeof segment === 'function'
				? segment(out_value)
				: undefined
		out_value =
			in_value && typeof in_value === 'function'
			? in_value.call(out_value)
			: in_value
	}
	return out_value
}
export { andandfn as andand__fn, }
