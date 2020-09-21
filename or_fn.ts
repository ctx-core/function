import { _wrap_a1 } from './_wrap_a1'
import type { wrap_a1_type } from './wrap_a1_type'
import type { a_nowrap_type } from './a_nowrap_type'
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
export interface or_fn_callable_type<I extends unknown> {
	(...args: wrap_a1_type<I>): I
}
