import type { a_nowrap_T } from './_types'
/**
 * Returns function that returns first truthy item in `a_unwrap` or value.
 */
export declare function left_or_<Val extends unknown = unknown>(a_unwrap:a_nowrap_T<Val>):(val:Val)=>(Val|undefined);
export { left_or_ as _left_or, left_or_ as _or__left, }
