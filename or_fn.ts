import { _wrap_a1 } from './_wrap_a1'
import type { wrap_a1_type } from './wrap_a1_type'
import type { a_nowrap_type } from './a_nowrap_type'
import { wrap_concat } from './wrap_concat'
/**
 * Returns first truthy or last item call or value in `a1_unwrap`.
 */
export function or_fn<I extends unknown, O extends unknown>(a1_unwrap: a_nowrap_type<I>) {
	const value_a1 = _wrap_a1<I>(a1_unwrap)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (!value) continue
		const fn_value: I extends or_fn_callable_type<I> ? O : I =
			typeof value === 'function'
			? value()
			: value
		if (fn_value) return fn_value
	}
}
export const or__fn = or_fn
export interface or_fn_callable_type<I extends unknown = unknown> {
	(...args: wrap_a1_type<I>): I
}
/**
 * Returns function that returns first truthy or last item call or value in `a1_unwrap`.
 */
export function _or_fn<I extends unknown, O extends unknown>(a1_unwrap: a_nowrap_type<I>) {
	return (value: I)=>or_fn<I, O>(wrap_concat<I>(a1_unwrap, value))
}
export const _or__fn = _or_fn
export const _fn__or__fn = _or_fn
