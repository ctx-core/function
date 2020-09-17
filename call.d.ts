import type { call_fn_type } from './call_fn_type';
/**
 * Calls the fn with ...arg_a1.
 */
export declare function call<R = unknown>(fn: call_fn_type<R>, ...arg_a1: unknown[]): R;
