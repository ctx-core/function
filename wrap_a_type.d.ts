import type { wrap_a1_type } from './wrap_a1_type';
import type { wrap_a2_type } from './wrap_a2_type';
export declare type wrap_a_type<I extends unknown = unknown> = I[] | I[][] | wrap_a1_type<I> | wrap_a2_type<I>;
