import { wrap_a_ } from './wrap_a_'
import type { wrap_a2_T } from './wrap_a2_T'
import type { a_nowrap_T } from './a_nowrap_T'
/**
 * Returns `wrap_a2_T` wrapped as a 2-dimensional array
 */
export function wrap_a2_<I extends unknown = unknown>(
	a2_nowrap:a_nowrap_T<I>
):wrap_a2_T<I> {
	return (
		wrap_a_<I>(a2_nowrap).map(
			(a_nowrap:unknown)=>wrap_a_<unknown>(a_nowrap)
		) as wrap_a2_T<I>
	)
}
export {
	wrap_a2_ as _wrap_a2,
	wrap_a2_ as _a2__wrap,
}
