import { or } from './or'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns first truthy or last item in `in_value_a1`.
 */
export function _right_or(in_value_a1) {
	return value=>or(wrap_concat([value], in_value_a1))
}
export const _or__right = _right_or
export const _or = _right_or
