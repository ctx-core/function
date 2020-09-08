import { concat } from './concat'
/**
 * Returns function that applies arg_a1 with ...arg_a1_
 */
export function _apply(fn, arg_a1 = []) {
	return (...arg_a1_)=>fn(...concat(arg_a1, arg_a1_))
}
