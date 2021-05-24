import { concat } from './concat'
import type { map_fn_T } from './map_fn_T'
/**
 * Returns function that returns map of calls to fn_a1 applying in_arg_a1 with ...arg_a1_
 */
export function _map_apply(fn_a1:map_fn_T[], in_arg_a1:unknown[] = []) {
	return (...fn_arg_a1:unknown[])=>fn_a1.map(fn=>fn(...concat(in_arg_a1, fn_arg_a1)))
}
export {
	_map_apply as _apply__map
}
