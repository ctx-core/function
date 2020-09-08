import { _bind_apply } from './_bind_apply'
import { concat } from './concat'
/**
 * Returns function returning map of calls to fn_a1 bound to self that applies arg_a1 with ...arg_a1_
 */
export function _bind_map_apply(fn_a1, self, args = []) {
	return (...arg_a1_)=>_bind_apply(fn_a1, self, concat(args, arg_a1_))
}
export const _apply__map__bind = _bind_map_apply
