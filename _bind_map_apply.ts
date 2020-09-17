import { _bind_apply } from './_bind_apply'
import type { call_fn_type } from './call_fn_type'
/**
 * Returns function returning map of calls to fn_a1 bound to self that applies arg_a1 with ...arg_a1_
 */
export function _bind_map_apply<R = unknown>(fn_a1:call_fn_type<R>[], self:any, in_arg_a1:unknown[] = []) {
	return (...fn_arg_a1:unknown[])=>
		fn_a1.map(
			(fn: call_fn_type<R>)=>
				_bind_apply<R>(fn, self, in_arg_a1)(...fn_arg_a1)
		)
}
export const _apply__map__bind = _bind_map_apply
