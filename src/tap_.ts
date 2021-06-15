import { tap } from './tap'
import type { tap_interceptor_T } from './tap'
/**
 * Returns function that calls tap with obj.
 */
export function tap_<Obj extends unknown = unknown>(
	obj:Obj
):(interceptor:tap_interceptor_T)=>Obj {
	return (interceptor:tap_interceptor_T)=>tap<Obj>(obj, interceptor)
}
export {
	tap_ as _tap,
}
