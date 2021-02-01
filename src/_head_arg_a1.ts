/**
 * Returns a function where the first `count` arguments are sent to the wrapped function.
 */
import { _slice_arg_a1, _slice_arg_a1_fn_type } from './_slice_arg_a1'
export function _head_arg_a1<I extends unknown = unknown>(fn:_slice_arg_a1_fn_type<I>, count = 1) {
	return _slice_arg_a1<I>(fn, 0, count)
}
export {
	_head_arg_a1 as _arg_a1__head
}