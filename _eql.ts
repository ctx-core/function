import { eql } from './eql'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns `===` operator to all values in `in_value_a1`.
 */
export function _eql(in_value_a1: unknown) {
	return (value: unknown)=>eql(wrap_concat(in_value_a1, value))
}
