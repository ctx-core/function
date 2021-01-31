/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export function andand<I extends unknown, O extends unknown>(
	obj: I,
	...name_a1: andand_name_type<I, O>[]
) {
	let out_value = obj
	for (let i = 0; i < name_a1.length; i++) {
		const segment = name_a1[i]
		const in_value = (out_value && (out_value as any)[segment as string])
		out_value =
			in_value
			|| (
				typeof segment === 'function'
				? (segment as andand_name_fn_type<I, O>)(out_value)
				: in_value
			)
	}
	return out_value as I|O
}
export type andand_name_fn_type<I extends unknown, O extends unknown> =
	(val: I|O) => I|O
export type andand_name_type<I extends unknown, O extends unknown> =
	string|number|andand_name_fn_type<I, O>
