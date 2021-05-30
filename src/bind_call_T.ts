export type bind_call_T</*@formatter:off*/
	A extends unknown[] = unknown[],
	O extends unknown = unknown,
>/*@formatter:on*/ = (...fn_arg_a:A)=>O
export type bind_call_type = bind_call_T
