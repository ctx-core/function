import { slice_arg_spread_a } from './slice_arg_spread_a'
import type { slice_arg_spread_a_fn_T } from './slice_arg_spread_a'
/**
 * Returns a function that calls fn passing only the first argument.
 */
export function arg_i0_a(fn:slice_arg_spread_a_fn_T) {
	return slice_arg_spread_a(fn, 0, 1)
}
export {
	arg_i0_a as arg__0__
}
