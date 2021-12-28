import type { a_nowrap_T, falsy } from '../_types'
/**
 * Returns function that returns the first falsy in `a_unwrap` or `value`.
 */
export declare function left_and_<Val extends unknown = unknown>(a_unwrap:a_nowrap_T<Val>):(val:Val)=>Val|falsy;
export { left_and_ as _left_and, left_and_ as _and__left, }
