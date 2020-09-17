import type { call_fn_type } from './call_fn_type';
/**
 * Returns function that calls ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export declare function _call(fn: call_fn_type, ...in_arg_a1: unknown[]): (...fn_arg_a1: unknown[]) => unknown;
