import type { tap__interceptor_T } from '../tap'
/**
 * Returns function that calls tap with obj.
 */
export declare function tap_<
	Val = unknown
>(
	fn:tap__interceptor_T<Val>
):(val:Val)=>Val
export { tap_ as _tap, }
