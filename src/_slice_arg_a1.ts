/**
 * Returns a function where the arguments to the wrapped function are sliced with begin_idx & end_idx.
 */
export function _slice_arg_a1<I extends unknown = unknown>(
	fn:_slice_arg_a1_fn_type<I>, begin_idx?:number, end_idx?:number
) {
	return (arg_a1:unknown[])=>fn(arg_a1.slice(begin_idx, end_idx) as unknown[])
}
export type _slice_arg_a1_fn_type<R = unknown> = (arg_a1:unknown[])=>R
export {
	_slice_arg_a1 as _arg_a1__slice,
	_slice_arg_a1 as _a1__arg__slice,
}
