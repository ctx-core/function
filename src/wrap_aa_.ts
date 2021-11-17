import type { a_nowrap_T } from './a_nowrap_T.js'
import { wrap_a_ } from './wrap_a_.js'
import type { wrap_aa_T } from './wrap_aa_T.js'
/**
 * Returns `wrap_aa_T` wrapped as a 2-dimensional array
 */
export function wrap_aa_<I extends unknown = unknown>(
	aa_nowrap:a_nowrap_T<I>
):wrap_aa_T<I> {
	return (
		wrap_a_<I>(aa_nowrap).map(
			(a_nowrap:unknown)=>wrap_a_<unknown>(a_nowrap)
		) as wrap_aa_T<I>
	)
}
export {
	wrap_aa_ as wrap_a2_,
	wrap_aa_ as _wrap_a2,
	wrap_aa_ as _a2__wrap,
}
