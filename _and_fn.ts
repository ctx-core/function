import { and_fn } from './and_fn'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns the first falsy or last item function call or value in `in_value_a1` .
 */
export function _and_fn(in_value_a1: unknown) {
	return (fn_value_a1: unknown)=>and_fn(wrap_concat(in_value_a1, fn_value_a1))
}
export const _and__fn = _and_fn
