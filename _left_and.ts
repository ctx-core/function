import { and } from './and'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns the first falsy in `in_value_a1` or `value`.
 */
export function _left_and<I = unknown>(in_value_a1: I|I[]) {
	return (value: I)=>and<I>(wrap_concat<I>(in_value_a1, value))
}
export const _and__left = _left_and
