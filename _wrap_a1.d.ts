import type { wrap_a1_type } from './wrap_a1_type';
import type { a_nowrap_type } from './a_nowrap_type';
/**
 * Returns `value` if array & `[value]` otherwise
 */
export declare function _wrap_a1<I extends unknown>(value: a_nowrap_type<I>): wrap_a1_type<I>;
export declare const _a1__wrap: typeof _wrap_a1;
