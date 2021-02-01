import type { wrap_a1_type } from './wrap_a1_type';
import type { a_nowrap_type } from './a_nowrap_type';
/**
 * Returns `value` if array & `[value]` otherwise
 */
export declare function _wrap_a1<I extends unknown = unknown>(value: a_nowrap_type<I>): wrap_a1_type<I>;
export { _wrap_a1 as _a1__wrap };
