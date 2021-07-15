import type { wrap_a_T } from './wrap_a_T.js'
export type wrap_a_item_T<I extends unknown = unknown> =
	wrap_a_T<I> extends (infer O)[][] ? O : never
export type wrap_a1_item_type = wrap_a_item_T
