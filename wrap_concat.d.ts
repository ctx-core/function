import type { wrap_a1_type } from './wrap_a1_type';
import type { a_nowrap_type } from './a_nowrap_type';
import type { wrap_a_type } from './wrap_a_type';
/**
 * [wrap](#wrap) `a1_unwrap` & [concat](#concat) `rest_a1`
 */
export declare function wrap_concat<I extends unknown>(a1_unwrap: a_nowrap_type<I>, ...rest_a1: wrap_a_type<I>): wrap_a1_type<I>;
export declare const concat__wrap: typeof wrap_concat;
