import type { bind_call_T } from './bind_call_T.js'
import type { call_fn_T } from './call_fn_T.js'
/**
 * Returns function bound to self that applies arg_a with ...arg_a_
 */
export function bind_apply_</*@formatter:off*/
	Self extends unknown = unknown,
	A_outer extends unknown = unknown,
	A_inner extends unknown[] = unknown[],
	Out extends unknown = unknown,
>(/*@formatter:on*/
	fn:call_fn_T<A_inner, Out>, self:Self, in_arg_a?:A_outer
):bind_call_T<A_inner, Out> {
	return (
		(...fn_arg_a:A_inner)=>
			fn.apply(
				self,
				[
					...(in_arg_a as unknown as A_inner),
					...(fn_arg_a as unknown as A_inner)
				] as unknown as A_inner
			) as Out
	) as bind_call_T<A_inner, Out>
}
export {
	bind_apply_ as _bind_apply,
	bind_apply_ as _apply__bind,
}
