import { and } from './and'
import { wrap_a_ } from './wrap_a_'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_T } from './a_nowrap_T'
/**
 * Returns function that returns the first falsy from `value` or `a_unwrap` or the last value of `a_unwrap`.
 */
export function right_and_<Val extends unknown = unknown>(
	a_unwrap:a_nowrap_T<Val>
) {
	return ((value:Val)=>and(wrap_concat(value, ...wrap_a_(a_unwrap))))
}
export {
	right_and_ as _and,
	right_and_ as _and__right
}
