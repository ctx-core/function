import { neql } from './neql'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns `!==` operator to all values in `in_value_a1`.
 * @param in_value_a1
 * @returns {function(*=): boolean}
 */
export function _neql(in_value_a1: unknown) {
	return (value: unknown)=>neql(wrap_concat(in_value_a1, value))
}
