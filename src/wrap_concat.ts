import { concat } from './concat.js'
import { wrap_a_ } from './wrap_a_.js'
import type { wrap_a_T } from './wrap_a_T.js'
import { wrap_aa_ } from './wrap_aa_.js'
import type { a_nowrap_T } from './a_nowrap_T.js'
import type { wrap_a_T2 } from './wrap_a_T2.js'
/**
 * [wrap](#wrap) `a_unwrap` & [concat](#concat) `rest_a`
 */
export function wrap_concat<I extends unknown = unknown>(
	a_unwrap: a_nowrap_T<I>,
	...rest_a: wrap_a_T2<I>
):wrap_a_T<I> {
	return (
		concat<I>(
			wrap_a_<I>(a_unwrap) as I[],
			...(wrap_aa_<I>(rest_a) as I[]|I[][])
		) as wrap_a_T<I>
	)
}
export {
	wrap_concat as concat__wrap
}
