/**
 * Returns a function that calls fn passing the arguments sliced by slice_arg_a.
 */ export function slice_arg_spread_a(fn, begin_idx, end_idx) {
	return (...arg_a)=>fn(arg_a.slice(begin_idx, end_idx))

}
export { slice_arg_spread_a as slice_arg_a1, slice_arg_spread_a as slice__a1__arg, }
