import type { a_nowrap_T } from './a_nowrap_T.js'
import { concat } from './concat.js'
import { or } from './or.js'
import { wrap_a_ } from './wrap_a_.js'
/**
 * Returns function that returns first truthy or last item in `a_unwrap`.
 */
export function right_or_<Val extends unknown = unknown>(
	a_unwrap:a_nowrap_T<Val>
):(fn_a_unwrap:Val)=>Val|undefined {
	return (
		(fn_a_unwrap:Val)=>
			or<Val>(
				concat<Val>(
					wrap_a_<Val>(fn_a_unwrap) as Val[],
					...(wrap_a_<Val>(a_unwrap) as Val[])
				) as Val
			)
	)
}
export {
	right_or_ as _right_or,
	right_or_ as _or__right,
	right_or_ as _or,
}
