import { or_fn } from './or_fn'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns function that returns first truthy or last item call or value in `a1_unwrap`.
 */
export function _or_fn<I extends unknown, O extends unknown>(a1_unwrap: a_nowrap_type<I>) {
	return (value: I)=>or_fn<I, O>(wrap_concat<I>(a1_unwrap, value))
}
export const _or__fn = _or_fn
export const _fn__or__fn = _or_fn
