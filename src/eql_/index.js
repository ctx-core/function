import { eql } from '../eql/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns function that returns `===` operator to all values in `in_value_a`.
 * @param {unknown[]}in_value_a
 * @returns {(val:unknown)=>boolean}
 */
export function eql_(in_value_a) {
	return (val)=>eql(wrap_concat(in_value_a, val))
}
export { eql_ as _eql, }
