import type { call_fn_type } from './call_fn_type';
/**
 * Returns function bound to self that returns map of fn_al calls with ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export declare function _bind_map_call</*@formatter:off*/ A1 extends unknown[] = unknown[], A2 extends unknown[] = unknown[], O2 extends unknown = unknown, S2 extends unknown = unknown>(/*@formatter:on*/ fn_a1: call_fn_type<A2, O2>[], self: S2, ...in_arg_a1: A2): (...fn_arg_a1: A1) => A2;
export { _bind_map_call as _call__map__bind };