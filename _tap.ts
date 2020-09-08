import { tap } from './tap'
/**
 * Returns function that calls tap with obj.
 */
export function _tap(obj) {
	return interceptor=>tap(obj, interceptor)
}
