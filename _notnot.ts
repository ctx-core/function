import { notnot } from './notnot'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that calls [notnot](#notnot) with [wrap_concat](#wrap_concat) of the arguments.
 */
export function _notnot(in_value_a1) {
	return value=>notnot(wrap_concat(in_value_a1, value))
}
