import { concat } from './concat'
import type { bind_call_type } from './bind_call_type'
import type { call_fn_type } from './call_fn_type'
/**
 * Returns function bound to self that calls ...in_arg_a1 concat with ...fn_arg_a1 passed to function
 */
export function _bind_call<R = unknown>(fn: call_fn_type<R>, self: unknown, ...in_arg_a1: unknown[]) {
	return ((...fn_arg_a1)=>fn.call(self, ...concat(in_arg_a1, fn_arg_a1)) as R) as bind_call_type<R>
}
export const _call__bind = _bind_call
