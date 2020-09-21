import type { wrap_a1_type } from './wrap_a1_type'
import type { wrap_a2_type } from './wrap_a2_type'
export type wrap_a_type<I extends unknown> = I[]|I[][]|wrap_a1_type<I>|wrap_a2_type<I>
