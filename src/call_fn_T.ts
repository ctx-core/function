export type call_fn_T</*@formatter:off*/
	A extends unknown[] = unknown[],
	O extends unknown = unknown
>/*@formatter:on*/ = (...args:A)=>O
export type call_fn_type = call_fn_T
