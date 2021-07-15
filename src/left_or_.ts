import { or } from './or.js'
import { wrap_concat } from './wrap_concat.js'
import type { a_nowrap_T } from './a_nowrap_T.js'
/**
 * Returns function that returns first truthy item in `a_unwrap` or value.
 */
export function left_or_<Val extends unknown = unknown>(
	a_unwrap:a_nowrap_T<Val>
):(val:Val)=>(Val|undefined) {
	return (val:Val)=>or<Val>(wrap_concat<Val>(a_unwrap, val))
}
export {
	left_or_ as _left_or,
	left_or_ as _or__left,
}
