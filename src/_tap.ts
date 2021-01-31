import { tap } from './tap'
import type { tap_interceptor_type } from './tap'
/**
 * Returns function that calls tap with obj.
 */
export function _tap<T = unknown>(obj: T) {
	return (interceptor: tap_interceptor_type)=>tap<T>(obj, interceptor)
}
