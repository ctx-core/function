import type { wrap_a2_type } from './wrap_a2_type';
import type { a_nowrap_type } from './a_nowrap_type';
/**
 * Returns `wrap_a2_type` wrapped as a 2-dimensional array
 */
export declare function _wrap_a2<I extends unknown = unknown>(a2_nowrap: a_nowrap_type<I>): wrap_a2_type<I>;
export { _wrap_a2 as _a2__wrap };
