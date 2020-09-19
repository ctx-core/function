import { not } from './not'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 */
export function _not<I>(in_value_a1: I|I[]) {
	return (value_a1: I[])=>not<I>(wrap_concat<I>(in_value_a1, value_a1))
}
