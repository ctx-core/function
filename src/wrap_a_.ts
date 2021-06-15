import type { wrap_a_T } from './wrap_a_T'
import type { a_nowrap_T } from './a_nowrap_T'
const { isArray } = Array
/**
 * Returns `value` if array & `[value]` otherwise
 */
export function wrap_a_<I extends unknown = unknown>(value:a_nowrap_T<I>):wrap_a_T<I> {
	return (
		isArray(value)
		? value as I
		: [value] as I[]
	) as wrap_a_T<I>
}
export {
	wrap_a_ as wrap_a1_,
	wrap_a_ as wrap_a_fn,
	wrap_a_ as wrap_a1_fn,
	wrap_a_ as _wrap_a1,
	wrap_a_ as _a1__wrap
}
