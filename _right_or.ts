import { or } from './or'
import { wrap_concat } from './wrap_concat'
import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns function that returns first truthy or last item in `in_value_a1`.
 */
export function _right_or<I>(in_value_a1: I|I[]) {
	return (value: I)=>or<I>(wrap_concat<I>([value], _wrap_a1<I>(in_value_a1)))
}
export const _or__right = _right_or
export const _or = _right_or
