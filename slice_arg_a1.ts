/**
 * Returns a function that calls fn passing the arguments sliced by slice_arg_a1.
 */
export function slice_arg_a1(fn: slice_arg_a1_fn_type, ...slice_arg_a1: []|[number]|[number, number]) {
	return (...arg_a1: unknown[])=>fn(arg_a1.slice.apply(arg_a1, slice_arg_a1))
}
export const slice__a1__arg = slice_arg_a1
export type slice_arg_a1_fn_type = (...arg_a1: unknown[]) => any
