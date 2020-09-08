import { call } from './call'
import { concat } from './concat'
/**
 * Returns function that calls ...arg_a1 concat with ...a1__args__ passed to function
 */
export function _call(fn, ...arg_a1) {
	return (...arg_a1_)=>call(fn, ...concat(arg_a1, arg_a1_))
}
