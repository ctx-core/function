export type bind_call_type</*@formatter:off*/
	A extends unknown[] = unknown[],
	O extends unknown = unknown,
>/*@formatter:on*/ = (...fn_arg_a1: A) => O
