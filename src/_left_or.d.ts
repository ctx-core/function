import type { a_nowrap_type } from './a_nowrap_type';
/**
 * Returns function that returns first truthy item in `a1_unwrap` or value.
 */
export declare function _left_or<I extends unknown = unknown>(a1_unwrap: a_nowrap_type<I>): (value: I) => unknown;
export { _left_or as _or__left };
