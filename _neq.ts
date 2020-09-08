import { neq } from './neq'
import { wrap_concat } from './wrap_concat'
/**
 * Return function that Returns `!=` operator to all values in `in_value_a1`.
 */
export function _neq(in_value_a1) {
	return value_a1=>neq(wrap_concat(in_value_a1, value_a1))
}
