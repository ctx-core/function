import { neq } from '../neq/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 * @param {unknown|unknown[]}in_value_a
 * @returns {(val:unknown)=>boolean}
 */
export function neq_(in_value_a) {
	return val=>neq(wrap_concat(in_value_a, val))
}
export { neq_ as _neq, }
