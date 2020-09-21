import { or } from './or'
import { _wrap_a1 } from './_wrap_a1'
import { concat } from './concat'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns function that returns first truthy or last item in `a1_unwrap`.
 */
export function _right_or<I extends unknown>(a1_unwrap:a_nowrap_type<I>) {
	return (
		(fn_a1_unwrap:I)=>
			or<I>(
				concat<I>(
					_wrap_a1<I>(fn_a1_unwrap) as I[],
					...(_wrap_a1<I>(a1_unwrap) as I[])
				) as I
			)
	)
}
export const _or__right = _right_or
export const _or = _right_or
