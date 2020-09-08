import { and } from './and'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns the first falsy from `value` or `in_value_a1` or the last value of `in_value_a1`.
 */
export function _right_and(in_value_a1) {
	return value=>and(wrap_concat([value], in_value_a1))
}
export const _and__right = _right_and
export const _and = _right_and
