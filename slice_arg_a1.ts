/**
 * Returns a function that calls fn passing the arguments sliced by arg_a1__slice.
 */
export function slice_arg_a1(fn, ...arg_a1__slice) {
	return (...arg_a1)=>fn(arg_a1.slice.apply(arg_a1, arg_a1__slice))
}
export const slice__a1__arg = slice_arg_a1
