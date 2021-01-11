import type { bind_call_type } from './bind_call_type'
import type { call_fn_type } from './call_fn_type'
/**
 * Returns function that applies in_arg_a1 with ...fn_arg_a1
 */
export function _apply</*@formatter:off*/
	A1 extends unknown[] = unknown[],
	O1 extends unknown = unknown,
	A2 extends unknown[] = unknown[],
	O2 extends unknown = unknown,
>/*@formatter:on*/(
	fn: call_fn_type<A2, O2>, in_arg_a1: unknown[] = []
) {
	return (
		(...fn_arg_a1: A1) => (fn(...[...in_arg_a1, ...fn_arg_a1] as A2)) as O1
	) as bind_call_type<A1, O1>
}
