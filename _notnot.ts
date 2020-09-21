import { notnot } from './notnot'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that calls [notnot](#notnot) with [wrap_concat](#wrap_concat) of the arguments.
 */
export function _notnot<I extends unknown>(in_value_a1: I|I[]) {
	return (value: I)=>notnot(wrap_concat<I>(in_value_a1, value))
}
