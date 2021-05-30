import { tap } from './tap'
import type { tap_interceptor_T } from './tap'
/**
 * Returns function that calls tap with obj.
 */
export function tap_<I extends unknown = unknown>(obj:I) {
	return (interceptor:tap_interceptor_T)=>tap<I>(obj, interceptor)
}
export {
	tap_ as _tap,
}
