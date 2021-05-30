import { wrap_a_ } from './wrap_a_'
import type { wrap_a_T } from './wrap_a_T'
import type { a_nowrap_T } from './a_nowrap_T'
import { wrap_concat } from './wrap_concat'
/**
 * Returns first truthy or last item call or value in `a_unwrap`.
 */
export function or_<I extends unknown, O extends unknown>(
	a_unwrap:a_nowrap_T<I>
):(I extends or_fn_callable_T<I> ? O : I)|undefined {
	const value_a = wrap_a_<I>(a_unwrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) continue
		const fn_value:I extends or_fn_callable_T<I> ? O : I =
			typeof value === 'function'
			? value()
			: value
		if (fn_value) return fn_value
	}
	return
}
export interface or_fn_callable_T<I extends unknown = unknown> {
	(...args:wrap_a_T<I>):I
}
/**
 * Returns function that returns first truthy or last item call or value in `a_unwrap`.
 */
export function _or_fn<I extends unknown, O extends unknown>(a_unwrap:a_nowrap_T<I>) {
	return (value:I)=>or_<I, O>(wrap_concat<I>(a_unwrap, value))
}
export {
	or_ as on__fn,
	_or_fn as _or__fn,
	_or_fn as _fn__or__fn
}
