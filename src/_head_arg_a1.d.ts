/**
 * Returns a function where the first `count` arguments are sent to the wrapped function.
 */
import { _slice_arg_a1_fn_type } from './_slice_arg_a1';
export declare function _head_arg_a1<I extends unknown = unknown>(fn: _slice_arg_a1_fn_type<I>, count?: number): (arg_a1: unknown[]) => I;
export { _head_arg_a1 as _arg_a1__head };
