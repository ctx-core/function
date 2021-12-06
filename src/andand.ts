/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export function andand<Val extends unknown = unknown, Out extends unknown = unknown>(
	obj:Val, ...name_a:andand_key_T<Val>[]
):Out|null {
	let out_value = obj
	for (let i = 0; i < name_a.length; i++) {
		const segment = name_a[i]
		return (
			out_value
			? typeof segment === 'function'
				? out_value[(segment as andand_key_fn_T<Val>)(out_value)]
				: out_value[segment]
			: null
		) as Out|null
	}
	return out_value as Out|null
}
export type andand_key_T<Val extends unknown = unknown> =
	keyof Val|andand_key_fn_T<Val>
export type andand_key_fn_T<Val extends unknown = unknown> = (val:Val)=>keyof Val
