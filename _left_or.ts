import { or } from './or'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns first truthy item in `in_value_a1` or value.
 */
export function _left_or(in_value_a1) {
	return value=>or(wrap_concat(in_value_a1, value))
}
export const _or__left = _left_or
