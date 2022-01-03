import { slice_arg_spread_a } from './slice_arg_spread_a.js'
/**
 * Returns a function that calls fn passing only the first argument.
 */ export function arg_i0_a(fn) {
	return slice_arg_spread_a(fn, 0, 1)
}
export { arg_i0_a as arg__0__ }
