import type { call_fn_type } from './call_fn_type';
/**
 * Returns function that calls ...in_arg_a1 concat with ...fn_arg_a1 passed to function
 */
export declare function _call</*@formatter:off*/ A1 extends unknown[] = unknown[], A2 extends unknown[] = unknown[], A extends unknown[] = [...A1, ...A2], O extends unknown = unknown>(/*@formatter:on*/ fn: call_fn_type<A, O>, ...in_arg_a1: A1): call_fn_type<A2, O>;
