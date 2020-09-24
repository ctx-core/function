import type { wrap_a2_type } from './wrap_a2_type'
export type wrap_a2_item_type<I extends unknown = unknown> =
	wrap_a2_type<I> extends (infer O)[][] ? O : never
