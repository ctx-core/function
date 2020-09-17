import type { bind_call_type } from './bind_call_type';
import type { call_fn_type } from './call_fn_type';
/**
 * Returns function that applies in_arg_a1 with ...fn_arg_a1
 */
export declare function _apply<R = unknown>(fn: call_fn_type<R>, in_arg_a1?: unknown[]): bind_call_type<R>;
