import type { bind_call_type } from './bind_call_type';
import type { call_fn_type } from './call_fn_type';
/**
 * Returns function bound to self that calls ...in_arg_a1 concat with ...fn_arg_a1 passed to function
 */
export declare function _bind_call</*@formatter:off*/ A1 extends unknown[] = unknown[], A2 extends unknown[] = unknown[], O2 extends unknown = unknown, S2 extends unknown = unknown>(/*@formatter:on*/ fn: call_fn_type<A2, O2>, self: S2, ...in_arg_a1: A2[]): bind_call_type<A2, unknown>;
export { _bind_call as _call__bind };
