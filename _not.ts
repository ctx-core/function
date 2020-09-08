import { not } from './not'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 */
export function _not(in_value_a1) {
	return value_a1=>not(wrap_concat(in_value_a1, value_a1))
}
