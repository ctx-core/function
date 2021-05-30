import { or } from './or'
import type { wrap_a_T } from './wrap_a_T'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_T } from './a_nowrap_T'
/**
 * Returns function that returns first truthy item in `a_unwrap` or value.
 */
export function left_or_<I extends unknown = unknown>(a_unwrap:a_nowrap_T<I>) {
	return (value:I)=>or<wrap_a_T<I>>(wrap_concat<I>(a_unwrap, value))
}
export {
	left_or_ as _left_or,
	left_or_ as _or__left,
}
