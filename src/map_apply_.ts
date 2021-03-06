import { concat } from './concat.js'
import type { map_fn_T } from './map_fn_T.js'
/**
 * Returns function that returns map of calls to fn_a applying in_arg_a with ...arg_a_
 */
export function map_apply_<Arg extends unknown = unknown, O extends unknown = unknown>(
	fn_a:map_fn_T[], in_arg_a:Arg[] = []
):(...fn_arg_a:Arg[])=>O[] {
	return (...fn_arg_a:Arg[])=>
		fn_a.map(fn=>fn(...concat(in_arg_a, fn_arg_a)) as O)
}
export type map_apply_T<Arg extends unknown = unknown, O extends unknown = unknown> =
	(...fn_arg_a:Arg[])=>O[]
export {
	map_apply_ as map_fn_apply_fn,
	map_apply_ as _map_apply,
	map_apply_ as _apply__map,
}
