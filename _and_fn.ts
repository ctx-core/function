import { and_fn } from './and_fn'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns the first falsy or last item function call or value in `in_value_a1` .
 */
export function _and_fn<
	A1 extends unknown[] = unknown[],
	A2 extends unknown[] = unknown[],
>(in_value_a1: A2) {
	return (fn_value_a1: A1)=>and_fn(wrap_concat(in_value_a1, fn_value_a1))
}
export {
	_and_fn as _and__fn
}
