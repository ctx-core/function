export type wrap_a2_T<I extends unknown = unknown> = (
	I extends unknown[][]
	? I
	: I extends unknown[]
		? I[]
		: I[][]
	)
export type wrap_a2_type = wrap_a2_T
