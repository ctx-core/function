import { or } from './or'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns first truthy item in `in_value_a1` or value.
 */
export function _left_or<I = unknown>(in_value_a1: I|I[]) {
	return (value: I)=>or<I>(wrap_concat<I>(in_value_a1, value))
}
export const _or__left = _left_or
