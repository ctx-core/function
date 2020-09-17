import { concat } from './concat'
import type { call_fn_type } from './call_fn_type'
/**
 * Returns function bound to self that returns map of fn_al calls with ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export function _bind_map_call<R = unknown>(fn_a1:call_fn_type<R>[], self:any, ...in_arg_a1:unknown[]) {
	return (...fn_arg_a1:any)=>fn_a1.map(
		(fn:call_fn_type<R>)=>
			fn.call(self, ...concat(in_arg_a1, fn_arg_a1)) as R
	) as R[]
}
export const _call__map__bind = _bind_map_call
