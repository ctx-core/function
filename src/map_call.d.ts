import type { map_fn_type } from './map_fn_type';
/**
 * Returns the map of calls to fn_a1 with ...arg_a1.
 */
export declare function map_call<I extends unknown = unknown>(fn_a1: map_fn_type<I>[], ...arg_a1: unknown[]): I[];
export { map_call as call__map };
