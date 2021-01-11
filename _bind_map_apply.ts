import { _bind_apply } from './_bind_apply'
import type { call_fn_type } from './call_fn_type'
/**
 * Returns function returning map of calls to fn_a1 bound to self that applies arg_a1 with ...arg_a1_
 */
export function _bind_map_apply</*@formatter:off*/
	A1 extends unknown[] = unknown[],
	O1 extends unknown = unknown,
	S1 extends unknown = unknown,
	A2 extends unknown[] = unknown[],
>/*@formatter:on*/(
	fn_a1: call_fn_type<A1, O1>[], self: S1, in_arg_a1: A2
) {
	return (...fn_arg_a1: A1) =>
		fn_a1.map(
			(fn: call_fn_type<A1, O1>) =>
				(
					_bind_apply<S1, A2, A1, O1>(fn, self, in_arg_a1)
				)(...fn_arg_a1)
		)
}
export {
	_bind_map_apply as _apply__map__bind
}
