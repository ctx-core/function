import type { bind_call_T } from './bind_call_T.js'
import type { call_fn_T } from './call_fn_T.js'
/**
 * Returns function bound to self that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */
export function bind_call_</*@formatter:off*/
	A1 extends unknown[] = unknown[],
	A2 extends unknown[] = unknown[],
	O2 extends unknown = unknown,
	S2 extends unknown = unknown
>(/*@formatter:on*/
	fn:call_fn_T<A2, O2>, self:S2, ...in_arg_a:A2[]
):bind_call_T<A2> {
	return (
		(...fn_arg_a:A1[])=>fn.call(self, ...[...in_arg_a, ...fn_arg_a] as A2)
	) as bind_call_T<A2>
}
export {
	bind_call_ as _bind_call,
	bind_call_ as _call__bind
}
