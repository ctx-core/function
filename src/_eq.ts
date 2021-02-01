import { eq } from './eq'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns `==` operator to all values in `in_value_a1S`.
 */
export function _eq(in_value_a1:any|unknown[]):(value:any|unknown[])=>boolean {
	return value=>eq(wrap_concat(in_value_a1, value))
}
export {
	_eq as _fn__eq
}