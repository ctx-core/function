import { and } from './and.js'
import { wrap_concat } from './wrap_concat.js'
import type { a_nowrap_T } from './a_nowrap_T.js'
import type { falsy } from './falsy.js'
/**
 * Returns function that returns the first falsy in `a_unwrap` or `value`.
 */
export function left_and_<Val extends unknown = unknown>(
	a_unwrap:a_nowrap_T<Val>
):(val:Val)=>Val|falsy {
	return (val:Val)=>and(wrap_concat(a_unwrap, val))
}
export {
	left_and_ as _left_and,
	left_and_ as _and__left,
}
