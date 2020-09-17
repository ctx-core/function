import type { call_fn_type } from './call_fn_type';
/**
 * Returns function bound to self that returns map of fn_al calls with ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export declare function _bind_map_call<R = unknown>(fn_a1: call_fn_type<R>[], self: any, ...in_arg_a1: unknown[]): (...fn_arg_a1: any) => R[];
export declare const _call__map__bind: typeof _bind_map_call;
