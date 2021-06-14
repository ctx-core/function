import type { call_fn_T } from './call_fn_T';
/**
 * Calls the fn with ...arg_a.
 */
export declare function call</*@formatter:off*/ A extends unknown[] = unknown[], O extends unknown = unknown>(/*@formatter:on*/ fn: call_fn_T<A, O>, ...arg_a: A): O;
