export type call_fn_type</*@formatter:off*/
	A extends unknown[] = unknown[],
	O extends unknown = unknown
>/*@formatter:on*/ = (...args: A) => O
