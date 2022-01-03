/**
 * Returns function bound to self that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */ export function bind_call_(/*@formatter:on*/ fn, self, ...in_arg_a) {
	return (...fn_arg_a)=>fn.call(self, ...[
		...in_arg_a,
		...fn_arg_a
	])

}
export { bind_call_ as _bind_call, bind_call_ as _call__bind }
