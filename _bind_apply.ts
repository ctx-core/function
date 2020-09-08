import { concat } from './concat'
/**
 * Returns function bound to self that applies arg_a1 with ...arg_a1_
 */
export function _bind_apply(fn, self, args = []) {
	return (...arg_a1_)=>fn.apply(self, concat(args, arg_a1_))
}
export const _apply__bind = _bind_apply
