import { and } from './and'
import { _wrap_a1 } from './_wrap_a1'
import type { wrap_a1_type } from './wrap_a1_type'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns function that returns the first falsy from `value` or `a1_unwrap` or the last value of `a1_unwrap`.
 */
export function _right_and<I extends unknown = unknown>(a1_unwrap:a_nowrap_type<I>) {
	return (
		(value:I)=>and<wrap_a1_type<I>>(
			wrap_concat<I>(value, ..._wrap_a1<I>(a1_unwrap))
		)
	)
}
export const _and__right = _right_and
export const _and = _right_and
