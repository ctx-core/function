/**
 * Returns a function than returns the called fn_a(value) chained with ands
 */
export function and_call_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(
	fn_a:((in_value:I)=>O)[]
):and_fn_call_T<I, O> {
	return (in_value:I)=>{
		let out_value:O|null = null
		for (const fn of fn_a) {
			out_value = fn(in_value)
			if (!out_value) return out_value as O|null
		}
		return out_value as O|null
	}
}
export type and_fn_call_T</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/ = (in_value:I)=>O|null
export {
	and_call_ as and_fn_call_fn,
	and_call_ as _and_fn_call,
	and_call_ as _and__fn__call,
}
