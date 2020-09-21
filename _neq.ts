import { neq } from './neq'
import { wrap_concat } from './wrap_concat'
/**
 * Return function that Returns `!=` operator to all values in `in_value_a1`.
 */
export function _neq<I extends unknown>(in_value_a1: I|I[]) {
	return (value_a1: I)=>neq<I>(wrap_concat<I>(in_value_a1, value_a1))
}
