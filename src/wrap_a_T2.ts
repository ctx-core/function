import type { wrap_a_T } from './wrap_a_T.js'
import type { wrap_aa_T } from './wrap_aa_T.js'
export type wrap_a_T2<I extends unknown = unknown> =
	I[]|I[][]|wrap_a_T<I>|wrap_aa_T<I>
	// I[]|I[][]|[...(I[]|I[][])]|wrap_a1_type<I>|wrap_aa_T<I>
