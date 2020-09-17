import type { andand_name_fn_type, andand_name_type } from './andand'
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 */
export function andand_<I = unknown, O = unknown>(obj:I, ...name_a1:andand_name_type<I, O>[]) {
	let out_value = obj
	for (let i = 0; i < name_a1.length; i++) {
		if (!out_value) break
		const segment = name_a1[i]
		let in_value = (out_value && out_value[segment as string]) as O
		in_value = in_value || ((typeof segment === 'function') ? (segment as andand_name_fn_type<I, O>)(out_value) : in_value)
		out_value =
			(in_value && typeof in_value === 'function')
			? in_value.call(out_value)
			: in_value
	}
	return out_value as I|O
}
export const andand__fn = andand_
