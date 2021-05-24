import type { andand_key_fn_T, andand_key_T } from './andand'
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 */
export function andand_<Val extends unknown = unknown, Out extends unknown = unknown>(
	obj:Val,
	...name_a1:andand_key_T<Val>[]
) {
	let out_value = obj
	for (let i = 0; i < name_a1.length; i++) {
		if (!out_value) break
		const segment = name_a1[i]
		let in_value = (
			out_value
			&& (
				out_value as Record<string, unknown>)[segment as string|number]
		)
		in_value = in_value || (
			(typeof segment === 'function')
			? (segment as andand_key_fn_T<Val>)(out_value)
			: in_value)
		out_value =
			(in_value && typeof in_value === 'function')
			? in_value.call(out_value)
			: in_value
	}
	return out_value as Out
}
export {
	andand_ as andand__fn
}
