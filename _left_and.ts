import { and } from './and'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_type } from './a_nowrap_type'
import type { wrap_a1_type } from './wrap_a1_type'
/**
 * Returns function that returns the first falsy in `a1_unwrap` or `value`.
 */
export function _left_and<I extends unknown = unknown>(a1_unwrap: a_nowrap_type<I>) {
	return (value: I)=>and<wrap_a1_type<I>>(wrap_concat<I>(a1_unwrap, value))
}
export const _and__left = _left_and
