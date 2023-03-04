export declare type bind_call_T<
	A extends readonly unknown[] = readonly unknown[],
	O extends unknown = unknown
> = (...fn_arg_a:A)=>O
export declare type bind_call_type = bind_call_T
