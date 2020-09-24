import { or } from './or'
import type { wrap_a1_type } from './wrap_a1_type'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns function that returns first truthy item in `a1_unwrap` or value.
 */
export function _left_or<I extends unknown = unknown>(a1_unwrap: a_nowrap_type<I>) {
	return (value: I)=>or<wrap_a1_type<I>>(wrap_concat<I>(a1_unwrap, value))
}
export const _or__left = _left_or
