/**
 * Returns function bound to self that returns map of fn_al calls with ...fac_arg_a concat with ...fn_arg_a passed to function
 */ export function bind_map_call_(/*@formatter:on*/ fn_a, self, ...fac_arg_a) {
	return (...fn_arg_a)=>fn_a.map((fn)=>fn.call(self, ...[
			...fac_arg_a,
			...fn_arg_a
		])
	)

}
export { bind_map_call_ as _bind_map_call, bind_map_call_ as bind_map_fn_call_fn, bind_map_call_ as _call__map__bind }
