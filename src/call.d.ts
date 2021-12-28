import type { call_fn_T } from './_types'
/**
 * Calls the fn with ...arg_a.
 */
export declare function call<A extends unknown[] = unknown[], O extends unknown = unknown>(/*@formatter:on*/ fn: call_fn_T<A, O>, ...arg_a: A): O;
