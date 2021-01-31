import type { map_fn_type } from './map_fn_type';
/**
 * Returns function that maps calls to fn_al ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export declare function _map_call<R = unknown>(fn_a1: map_fn_type<R>[], ...in_arg_a1: unknown[]): (...fn_arg_a1: unknown[]) => R[];
export declare const _call__map: typeof _map_call;
