import { or } from './or'
import { _wrap_a1 } from './_wrap_a1'
import { concat } from './concat'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns function that returns first truthy or last item in `a1_unwrap`.
 */
export function _right_or<Val extends unknown = unknown>(
	a1_unwrap:a_nowrap_type<Val>
) {
	return (
		(fn_a1_unwrap:Val)=>
			or<Val>(
				concat<Val>(
					_wrap_a1<Val>(fn_a1_unwrap) as Val[],
					...(_wrap_a1<Val>(a1_unwrap) as Val[])
				) as Val
			)
	)
}
export const _or__right = _right_or
export const _or = _right_or
