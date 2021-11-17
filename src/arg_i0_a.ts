import type { slice_arg_spread_a_ret_T } from './slice_arg_spread_a.js'
import { slice_arg_spread_a, slice_arg_spread_a_arg_fn_T } from './slice_arg_spread_a.js'
/**
 * Returns a function that calls fn passing only the first argument.
 */
export function arg_i0_a<In extends unknown[] = unknown[], Out extends unknown = unknown>(
	fn:slice_arg_spread_a_arg_fn_T<In, Out>
):slice_arg_spread_a_ret_T<In, Out> {
	return slice_arg_spread_a(fn, 0, 1)
}
export {
	arg_i0_a as arg__0__
}
