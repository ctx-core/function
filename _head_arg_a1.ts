/**
 * Returns a function where the first `count` arguments are sent to the wrapped function.
 */
import { _slice_arg_a1 } from './_slice_arg_a1'
export function _head_arg_a1(fn, count=1) {
  return _slice_arg_a1(fn, 0, count)
}
export const _arg_a1__head = _head_arg_a1
