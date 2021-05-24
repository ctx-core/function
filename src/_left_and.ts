import { and } from './and'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns function that returns the first falsy in `a1_unwrap` or `value`.
 */
export function _left_and<Val extends unknown = unknown>(a1_unwrap:a_nowrap_type<Val>) {
	return (value:Val)=>and(wrap_concat(a1_unwrap, value))
}
export { _left_and as _and__left }
