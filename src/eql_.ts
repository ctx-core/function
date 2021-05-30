import { eql } from './eql'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns `===` operator to all values in `in_value_a`.
 */
export function eql_(in_value_a:unknown) {
	return (value:unknown)=>eql(wrap_concat(in_value_a, value))
}
export {
	eql_ as _eql,
}
