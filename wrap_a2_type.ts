export type wrap_a2_type<I extends unknown> = (
	I extends unknown[][]
	? I
	: I extends unknown[]
		? I[]
		: I[][]
	)
