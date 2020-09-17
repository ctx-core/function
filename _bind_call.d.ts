import type { bind_call_type } from './bind_call_type';
import type { call_fn_type } from './call_fn_type';
/**
 * Returns function bound to self that calls ...in_arg_a1 concat with ...fn_arg_a1 passed to function
 */
export declare function _bind_call<R = unknown>(fn: call_fn_type<R>, self: unknown, ...in_arg_a1: unknown[]): bind_call_type<R>;
export declare const _call__bind: typeof _bind_call;
