import type { andand_key_fn_T, andand_key_T } from './andand'
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 */
export function andandfn<Val extends unknown = unknown, Out extends unknown = unknown>(
	obj:Val,
	...name_a:andand_key_T<Val>[]
) {
	let out_value = obj
	for (let i = 0; i < name_a.length; i++) {
		if (!out_value) break
		const segment = name_a[i]
		let in_value =
			out_value
			? (out_value as Record<string, unknown>)[segment as string|number]
			: (typeof segment === 'function')
				? (segment as andand_key_fn_T<Val>)(out_value)
				: undefined
		out_value =
			(in_value && typeof in_value === 'function')
			? in_value.call(out_value)
			: in_value
	}
	return out_value as Out
}
export {
	andandfn as andand__fn,
}
