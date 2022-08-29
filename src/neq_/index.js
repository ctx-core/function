import { neq } from '../neq/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 */
export function neq_(in_value_a) {
	return (val_a)=>neq(wrap_concat(in_value_a, val_a))
}
export { neq_ as _neq, }