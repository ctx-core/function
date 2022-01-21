/**
 * Returns function bound to self that applies arg_a with ...arg_a_
 */
export function bind_apply_(/*@formatter:on*/ fn, self, in_arg_a) {
	return (...fn_arg_a)=>fn.apply(self, [
		...in_arg_a,
		...fn_arg_a
	])
}
export { bind_apply_ as _bind_apply, bind_apply_ as _apply__bind, }
