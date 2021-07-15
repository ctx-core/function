import { bind_apply_ } from './bind_apply_.js'
import type { call_fn_T } from './call_fn_T.js'
/**
 * Returns function returning map of calls to fn_a bound to self that applies arg_a with ...arg_a_
 */
export function bind_map_apply_</*@formatter:off*/
	A1 extends unknown[] = unknown[],
	O1 extends unknown = unknown,
	S1 extends unknown = unknown,
	A2 extends unknown[] = unknown[],
>/*@formatter:on*/(
	fn_a:call_fn_T<A1, O1>[], self:S1, in_arg_a:A2
):(...fn_arg_a:A1)=>O1[] {
	return (...fn_arg_a:A1)=>
		fn_a.map(
			(fn:call_fn_T<A1, O1>)=>
				(
					bind_apply_<S1, A2, A1, O1>(fn, self, in_arg_a)
				)(...fn_arg_a)
		)
}
export {
	bind_map_apply_ as _bind_map_apply,
	bind_map_apply_ as bind_map_fn_apply_fn,
	bind_map_apply_ as _apply__map__bind
}
