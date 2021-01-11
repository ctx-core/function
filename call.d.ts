import type { call_fn_type } from './call_fn_type';
/**
 * Calls the fn with ...arg_a1.
 */
export declare function call</*@formatter:off*/ A extends unknown[] = unknown[], O extends unknown = unknown>(/*@formatter:on*/ fn: call_fn_type<A, O>, ...arg_a1: A): O;
