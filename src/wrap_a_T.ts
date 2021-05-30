export type wrap_a_T<I extends unknown = unknown> =
	I extends unknown[] ? I : I[]
export type wrap_a1_T = wrap_a_T
export type wrap_a1_type = wrap_a_T
