import type { bind_call_type } from './bind_call_type'
import type { call_fn_type } from './call_fn_type'
/**
 * Returns function bound to self that applies arg_a1 with ...arg_a1_
 */
export function _bind_apply</*@formatter:off*/
	S1 extends unknown = unknown,
	A1 extends unknown = unknown,
	A2 extends unknown[] = unknown[],
	O2 extends unknown = unknown,
>(/*@formatter:on*/
	fn: call_fn_type<A2, O2>, self: S1, in_arg_a1?: A1
) {
	return (
		(...fn_arg_a1: A2) =>
			fn.apply(
				self,
				[
					...(in_arg_a1 as unknown as A2),
					...(fn_arg_a1 as unknown as A2)
				] as unknown as A2
			) as O2
	) as bind_call_type<A2, O2>
}
export {
	_bind_apply as _apply__bind
}
