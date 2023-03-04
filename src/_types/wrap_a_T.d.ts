export declare type wrap_a_T<
	I extends unknown = unknown
> =
	I extends readonly unknown[]
	? I
	: readonly I[]
export declare type wrap_a1_T = wrap_a_T
export declare type wrap_a1_type = wrap_a_T