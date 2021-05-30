import { and_ } from './and_'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that returns the first falsy or last item function call or value in `in_value_a` .
 */
export function and_2<A_outer extends unknown[] = unknown[],
	A_inner extends unknown[] = unknown[],
	>(in_value_a:A_inner) {
	return (fn_value_a:A_outer)=>and_(wrap_concat(in_value_a, fn_value_a))
}
export {
	and_2 as _and_fn,
	and_2 as _and__fn,
}
