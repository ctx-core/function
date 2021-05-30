import { concat } from './concat'
import type { map_fn_T } from './map_fn_T'
/**
 * Returns function that returns map of calls to fn_a applying in_arg_a with ...arg_a_
 */
export function map_apply_(fn_a:map_fn_T[], in_arg_a:unknown[] = []) {
	return (...fn_arg_a:unknown[])=>fn_a.map(fn=>fn(...concat(in_arg_a, fn_arg_a)))
}
export {
	map_apply_ as map_fn_apply_fn,
	map_apply_ as _map_apply,
	map_apply_ as _apply__map,
}
