import { concat } from './concat'
import { _wrap_a1 } from './_wrap_a1'
import type { wrap_a1_type } from './wrap_a1_type'
import { _wrap_a2 } from './_wrap_a2'
import type { a_nowrap_type } from './a_nowrap_type'
import type { wrap_a_type } from './wrap_a_type'
/**
 * [wrap](#wrap) `a1_unwrap` & [concat](#concat) `rest_a1`
 */
export function wrap_concat<I extends unknown = unknown>(
	a1_unwrap:a_nowrap_type<I>,
	...rest_a1:wrap_a_type<I>
) {
	return (
		concat<I>(
			_wrap_a1<I>(a1_unwrap) as I[],
			...(_wrap_a2<I>(rest_a1) as I[]|I[][])
		) as wrap_a1_type<I>
	)
}
export const concat__wrap = wrap_concat
