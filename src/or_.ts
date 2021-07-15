import { wrap_a_ } from './wrap_a_.js'
import type { wrap_a_T } from './wrap_a_T.js'
import type { a_nowrap_T } from './a_nowrap_T.js'
import { wrap_concat } from './wrap_concat.js'
/**
 * Returns first truthy or last item call or value in `a_unwrap`.
 */
export function or_<Val extends unknown, Ret extends unknown>(
	a_unwrap:a_nowrap_T<Val>
):or_T<Val, Ret> {
	const value_a = wrap_a_<Val>(a_unwrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) continue
		const fn_value:Val extends or_fn_callable_T<Val> ? Ret : Val =
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
export type or_T<Val extends unknown, Ret extends unknown> =
	(Val extends or_fn_callable_T<Val> ? Ret : Val)|undefined
/**
 * Returns function that returns first truthy or last item call or value in `a_unwrap`.
 */
export function or_fn_<Val extends unknown, Ret extends unknown>(
	a_unwrap:a_nowrap_T<Val>
):(val:Val)=>or_T<Val, Ret> {
	return (val:Val)=>or_<Val, Ret>(wrap_concat<Val>(a_unwrap, val))
}
export type or_fn_T<Val extends unknown, Ret extends unknown> =
	(val:Val)=>or_T<Val, Ret>
export {
	or_ as on__fn,
	or_fn_ as _or__fn,
	or_fn_ as _fn__or__fn
}
