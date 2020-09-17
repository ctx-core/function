import { call } from './call'
import { concat } from './concat'
import type { call_fn_type } from './call_fn_type'
/**
 * Returns function that calls ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export function _call(fn: call_fn_type, ...in_arg_a1: unknown[]) {
	return (...fn_arg_a1: unknown[])=>call(fn, ...concat(in_arg_a1, fn_arg_a1))
}
