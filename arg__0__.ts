import { slice_arg_a1 } from './slice_arg_a1'
/**
 * Returns a function that calls fn passing only the first argument.
 */
export function arg__0__(fn) {
	return slice_arg_a1(fn, 0, 1)
}
