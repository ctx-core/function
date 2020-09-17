import { and } from './and'
import { wrap_concat } from './wrap_concat'
import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns function that returns the first falsy from `value` or `in_value_a1` or the last value of `in_value_a1`.
 */
export function _right_and<I = unknown>(in_value_a1: I|I[]) {
	return (value: I)=>and<I>(wrap_concat([value], _wrap_a1<I>(in_value_a1)))
}
export const _and__right = _right_and
export const _and = _right_and
