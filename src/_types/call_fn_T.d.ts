export declare type call_fn_T<
	A extends readonly unknown[] = readonly unknown[],
	O extends unknown = unknown
> = (...args:A)=>O
export declare type call_fn_type = call_fn_T
