import type { wrap_a_T } from './wrap_a_T'
import type { wrap_aa_T } from './wrap_aa_T'
export declare type wrap_a_T2<
	I extends unknown = unknown
> =
	readonly I[]
	|readonly I[][]
	|wrap_a_T<I>
	|wrap_aa_T<I>
