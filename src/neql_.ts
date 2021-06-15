import { neql } from './neql'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns `!==` operator to all values in `in_value_a`.
 * @param in_value_a
 * @returns {function(*=): boolean}
 */
export function neql_<Arg extends unknown = unknown>(
	in_value_a:Arg[]
):(value:Arg)=>boolean {
	return (value:Arg)=>neql(wrap_concat(in_value_a, value))
}
export {
	neql_ as _neql,
}
