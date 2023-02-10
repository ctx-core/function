import type { tap_interceptor_T } from '../tap'
/**
 * Returns function that calls tap with obj.
 */
export declare function tap_<
	Obj = unknown
>(
	fn:tap_interceptor_T<Obj>
):(obj:Obj)=>Obj
export { tap_ as _tap, }
