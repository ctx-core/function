import type { call_fn_T } from './call_fn_T'
/**
 * Returns function bound to self that returns map of fn_al calls with ...fac_arg_a concat with ...fn_arg_a passed to function
 */
export function bind_map_call_</*@formatter:off*/
	A_inner extends unknown[] = unknown[],
	A_outer extends unknown[] = unknown[],
	Out extends unknown = unknown,
	Self extends unknown = unknown,
>(/*@formatter:on*/
	fn_a:call_fn_T<A_outer, Out>[], self:Self, ...fac_arg_a:A_outer
) {
	return (...fn_arg_a:A_inner)=>fn_a.map(
		(fn:call_fn_T<A_outer, Out>)=>
			fn.call(self, ...[...fac_arg_a, ...fn_arg_a] as A_outer)
	) as A_outer
}
export {
	bind_map_call_ as _bind_map_call,
	bind_map_call_ as bind_map_fn_call_fn,
	bind_map_call_ as _call__map__bind
}
