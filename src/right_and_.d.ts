import type { a_nowrap_T, falsy } from './_types'
/**
 * Returns function that returns the first falsy from `value` or `a_unwrap` or the last value of `a_unwrap`.
 */
export declare function right_and_<Val extends unknown = unknown>(a_unwrap:a_nowrap_T<Val>):(val:Val)=>Val|falsy;
export { right_and_ as _and, right_and_ as _and__right }
