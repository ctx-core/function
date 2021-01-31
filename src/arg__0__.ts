import { slice_arg_a1 } from './slice_arg_a1'
import type { slice_arg_a1_fn_type } from './slice_arg_a1'
/**
 * Returns a function that calls fn passing only the first argument.
 */
export function arg__0__(fn: slice_arg_a1_fn_type) {
	return slice_arg_a1(fn, 0, 1)
}
