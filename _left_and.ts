import { and } from './and'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns the first falsy in `in_value_a1` or `value`.
 */
export function _left_and(in_value_a1) {
	return value=>and(wrap_concat(in_value_a1, value))
}
export const _and__left = _left_and
