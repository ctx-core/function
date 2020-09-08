import { and_fn } from './and_fn'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns the first falsy or last item function call or value in `in_value_a1` .
 */
export function _and_fn(in_value_a1) {
	return value_a1_=>and_fn(wrap_concat(in_value_a1, value_a1_))
}
export const _and__fn = _and_fn
