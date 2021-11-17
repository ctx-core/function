import { concat } from './concat.js'
import { map_call } from './map_call.js'
import type { map_fn_T } from './map_fn_T.js'
/**
 * Returns function that maps calls to fn_al ...fac_arg_a concat with ...fn_arg_a passed to function
 */
export function map_call_<I extends unknown = unknown, O extends unknown = unknown>(
	fn_a:map_fn_T<I, O>[], ...fac_arg_a:I[]
):(...fn_arg_a:I[])=>O[] {
	return (...fn_arg_a:I[])=>
		map_call<I, O>(fn_a, ...concat<I>(fac_arg_a, fn_arg_a))
}
export {
	map_call_ as map_a_call_fn,
	map_call_ as map_a1_call_fn,
	map_call_ as _map_call,
	map_call_ as _call__map,
}
