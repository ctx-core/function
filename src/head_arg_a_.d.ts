/**
 * Returns a function where the first `count` arguments are sent to the wrapped function.
 */
import { slice_arg_a_fn_T, slice_arg_a_T } from './slice_arg_a_.js'
export declare function head_arg_a_<I extends unknown = unknown>(fn:slice_arg_a_fn_T<I>, count?:number):slice_arg_a_T<I>;
export { head_arg_a_ as head_arg_a1_fn, head_arg_a_ as _head_arg_a1, head_arg_a_ as _arg_a1__head }
