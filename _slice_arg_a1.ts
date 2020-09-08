/**
 * Returns a function where the arguments to the wrapped function are sliced with begin_idx & end_idx.
 */
export function _slice_arg_a1(fn:(...arg_a1)=>any, begin_idx?:number, end_idx?:number) {
  return (...arg_a1) => fn(...arg_a1.slice(begin_idx, end_idx))
}
export const _arg_a1__slice = _slice_arg_a1
export const _a1__arg__slice = _slice_arg_a1
