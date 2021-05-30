import { not } from './not'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_T } from './a_nowrap_T'
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 */
export function not_<I extends unknown = unknown>(a_unwrap: a_nowrap_T<I>) {
	return (value_a: I[])=>not<I>(wrap_concat<I>(a_unwrap, value_a))
}
export {
	not_ as _not,
}
