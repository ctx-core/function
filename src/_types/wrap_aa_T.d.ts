export declare type wrap_aa_T<
	I extends unknown = unknown
> = (
	I extends readonly unknown[][]
	? I
	: I extends readonly unknown[]
		? readonly I[]
		: readonly I[][])
export declare type wrap_aa_type = wrap_aa_T
