import type { map_fn_type } from './map_fn_type';
/**
 * Returns function that maps calls to fn_al ...in_arg_a1 concat with ...a1__args__ passed to function
 */
export declare function _map_call<I extends unknown = unknown>(fn_a1: map_fn_type<I>[], ...in_arg_a1: unknown[]): (...fn_arg_a1: unknown[]) => I[];
export { _map_call as _call__map };
