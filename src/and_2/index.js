import { and_ } from '../and_/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns function that returns the first falsy or last item function call or value in `in_value_a` .
 * @param in_value_a{unknown[]}
 * @returns {(fn_value_a:unknown[])=>unknown}
 */
export function and_2(in_value_a) {
	return (fn_value_a)=>and_(wrap_concat(in_value_a, fn_value_a))
}
export {
	and_2 as _and_fn,
	and_2 as _and__fn,
}
