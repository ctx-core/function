import type { wrap_aa_T } from './wrap_aa_T'
export type wrap_aa_item_T<I extends unknown = unknown> =
	wrap_aa_T<I> extends (infer O)[][] ? O : never
export type wrapA2ItemT = wrap_aa_item_T
