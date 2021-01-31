/**
 * Returns a function where the first `count` arguments are sent to the wrapped function.
 */
import { _slice_arg_a1_fn_type } from './_slice_arg_a1';
export declare function _head_arg_a1<R = unknown>(fn: _slice_arg_a1_fn_type<R>, count?: number): (arg_a1: unknown[]) => R;
export declare const _arg_a1__head: typeof _head_arg_a1;
