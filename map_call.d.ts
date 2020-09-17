import type { map_fn_type } from './map_fn_type';
/**
 * Returns the map of calls to fn_a1 with ...arg_a1.
 */
export declare function map_call<R = unknown>(fn_a1: map_fn_type<R>[], ...arg_a1: unknown[]): R[];
export declare const call__map: typeof map_call;
