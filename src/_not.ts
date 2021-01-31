import { not } from './not'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 */
export function _not<I extends unknown = unknown>(a1_unwrap: a_nowrap_type<I>) {
	return (value_a1: I[])=>not<I>(wrap_concat<I>(a1_unwrap, value_a1))
}
