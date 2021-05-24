import { and } from './and'
import { _wrap_a1 } from './_wrap_a1'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns function that returns the first falsy from `value` or `a1_unwrap` or the last value of `a1_unwrap`.
 */
export function _right_and<Val extends unknown = unknown>(
	a1_unwrap:a_nowrap_type<Val>
) {
	return ((value:Val)=>and(wrap_concat(value, ..._wrap_a1(a1_unwrap))))
}
export {
	_right_and as _and,
	_right_and as _and__right
}
