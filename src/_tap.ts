import { tap } from './tap'
import type { tap_interceptor_type } from './tap'
/**
 * Returns function that calls tap with obj.
 */
export function _tap<I extends unknown = unknown>(obj:I) {
	return (interceptor:tap_interceptor_type)=>tap<I>(obj, interceptor)
}
