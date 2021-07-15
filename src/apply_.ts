import type { bind_call_T } from './bind_call_T.js'
import type { call_fn_T } from './call_fn_T.js'
/**
 * Returns function that applies in_arg_a with ...fn_arg_a
 */
export function apply_</*@formatter:off*/
	A1 extends unknown[] = unknown[],
	O1 extends unknown = unknown,
	A2 extends unknown[] = unknown[],
	O2 extends unknown = unknown,
>/*@formatter:on*/(
	fn:call_fn_T<A2, O2>, in_arg_a:unknown[] = []
):bind_call_T<A1, O1> {
	return (
		(...fn_arg_a:A1)=>(fn(...[...in_arg_a, ...fn_arg_a] as A2)) as O1
	) as bind_call_T<A1, O1>
}
export {
	apply_ as _apply,
}
