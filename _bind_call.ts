import { concat } from './concat'
/**
 * Returns function bound to self that calls ...arg_a1 concat with ...a1__args__ passed to function
 */
export function _bind_call(fn, self, ...arg_a1) {
	return (...arg_a1_)=>fn.call(self, ...concat(arg_a1, arg_a1_))
}
export const _call__bind = _bind_call
