import { neql } from '../neql/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns function that returns `!==` operator to all values in `in_value_a`.
 * @param {unknown}in_value_a
 * @returns {(value:unknown)=>boolean}
 */
export function neql_(in_value_a) {
	return (value)=>neql(wrap_concat(in_value_a, value))
}
export { neql_ as _neql, }
