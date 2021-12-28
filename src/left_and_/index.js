import { and } from '../and/index.js'
import { wrap_concat } from '../wrap_concat.js'
/**
 * Returns function that returns the first falsy in `a_unwrap` or `value`.
 */
export function left_and_(a_unwrap) {
	return (val)=>and(wrap_concat(a_unwrap, val))
}
export { left_and_ as _left_and, left_and_ as _and__left, }
