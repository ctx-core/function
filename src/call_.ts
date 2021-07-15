import { call } from './call.js'
import type { call_fn_T } from './call_fn_T.js'
/**
 * Returns function that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */
export function call_</*@formatter:off*/
	A_first extends unknown[] = unknown[],
	A_second extends unknown[] = unknown[],
	A extends unknown[] = [...A_first, ...A_second],
	// A extends unknown[] = [...A1, ...A2],
	Out extends unknown = unknown
>(/*@formatter:on*/
	fn:call_fn_T<A, Out>, ...in_arg_a:A_first
):call_fn_T<A_second, Out> {
	return (...fn_arg_a:A_second)=>call<A, Out>(
		fn, ...([...in_arg_a, ...fn_arg_a] as A)
	)
}
export {
	call_ as _call,
}
