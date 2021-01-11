/**
 * Returns a function than returns the called fn_a1(value) chained with ands
 */
export function _and_fn_call</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	fn_a1: ((in_value: I) => O)[]
): and_fn_call_type<I, O> {
	return (in_value: I) => {
		let out_value: O|null = null
		for (const fn of fn_a1) {
			out_value = fn(in_value)
			if (!out_value) return out_value as O|null
		}
		return out_value as O|null
	}
}
export type and_fn_call_type</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/ = (in_value: I) => O|null
export {
	_and_fn_call as _and__fn__call
}
