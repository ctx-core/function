import type { wrap_a_T } from './wrap_a_T';
import type { a_nowrap_T } from './a_nowrap_T';
import type { wrap_a_T2 } from './wrap_a_T2';
/**
 * [wrap](#wrap) `a_unwrap` & [concat](#concat) `rest_a`
 */
export declare function wrap_concat<I extends unknown = unknown>(a_unwrap: a_nowrap_T<I>, ...rest_a: wrap_a_T2<I>): wrap_a_T<I>;
export { wrap_concat as concat__wrap };
