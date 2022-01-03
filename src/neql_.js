import { neql } from './neql.js'
import { wrap_concat } from './wrap_concat.js'
/**
 * Returns function that returns `!==` operator to all values in `in_value_a`.
 * @param in_value_a
 * @returns {function(*=): boolean}
 */ export function neql_(in_value_a) {
	return (value)=>neql(wrap_concat(in_value_a, value))

}
export { neql_ as _neql, }
