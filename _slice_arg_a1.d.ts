/**
 * Returns a function where the arguments to the wrapped function are sliced with begin_idx & end_idx.
 */
export declare function _slice_arg_a1<R = unknown>(fn: _slice_arg_a1_fn_type<R>, begin_idx?: number, end_idx?: number): (arg_a1: unknown[]) => R;
export declare const _arg_a1__slice: typeof _slice_arg_a1;
export declare const _a1__arg__slice: typeof _slice_arg_a1;
export declare type _slice_arg_a1_fn_type<R = unknown> = (arg_a1: unknown[]) => R;
