import type { wrap_a_T } from './wrap_a_T';
import type { wrap_a2_T } from './wrap_a2_T';
export declare type wrap_a_T2<I extends unknown = unknown> = I[] | I[][] | wrap_a_T<I> | wrap_a2_T<I>;
