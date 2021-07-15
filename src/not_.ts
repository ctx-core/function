import { not } from './not.js'
import { wrap_concat } from './wrap_concat.js'
import type { a_nowrap_T } from './a_nowrap_T.js'
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 */
export function not_<I extends unknown = unknown>(a_unwrap:a_nowrap_T<I>):not_T<I> {
	return (val_a:I[])=>not<I>(wrap_concat<I>(a_unwrap, val_a))
}
export type not_T<I extends unknown = unknown> = (val_a:I[])=>boolean
export {
	not_ as _not,
}
