import type { bind_call_type } from './bind_call_type';
import type { call_fn_type } from './call_fn_type';
/**
 * Returns function bound to self that applies arg_a1 with ...arg_a1_
 */
export declare function _bind_apply<R = unknown>(fn: call_fn_type<R>, self: unknown, in_arg_a1?: unknown[]): bind_call_type<R>;
export declare const _apply__bind: typeof _bind_apply;
