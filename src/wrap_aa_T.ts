export type wrap_aa_T<I extends unknown = unknown> = (
	I extends unknown[][]
	? I
	: I extends unknown[]
		? I[]
		: I[][]
	)
export type wrap_aa_type = wrap_aa_T
