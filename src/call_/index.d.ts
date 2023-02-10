import type { call_fn_T } from '../_types'
/**
 * Returns function that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */
export declare function call_<
	A_first extends unknown[] = unknown[],
	A_second extends unknown[] = unknown[],
	A extends unknown[] = [...A_first, ...A_second],
	Out extends unknown = unknown
>(fn:call_fn_T<A, Out>, ...in_arg_a:A_first):call_fn_T<A_second, Out>
export { call_ as _call, }
