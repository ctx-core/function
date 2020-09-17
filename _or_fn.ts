import { or_fn } from './or_fn'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns first truthy or last item call or value in `in_value_a1`.
 */
export function _or_fn<T = unknown, R = unknown>(in_value_a1: T[]) {
	return (value: T)=>or_fn<T, R>(wrap_concat(in_value_a1, value))
}
export const _or__fn = _or_fn
export const _fn__or__fn = _or_fn
