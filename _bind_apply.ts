import { concat } from './concat'
import type { bind_call_type } from './bind_call_type'
import type { call_fn_type } from './call_fn_type'
/**
 * Returns function bound to self that applies arg_a1 with ...arg_a1_
 */
export function _bind_apply<R = unknown>(fn: call_fn_type<R>, self: unknown, in_arg_a1: unknown[] = []) {
	return ((...fn_arg_a1)=>fn.apply(self, concat(in_arg_a1, fn_arg_a1)) as R) as bind_call_type<R>
}
export const _apply__bind = _bind_apply
