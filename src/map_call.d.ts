import type { map_fn_T } from './map_fn_T';
/**
 * Returns the map of calls to fn_a with ...arg_a.
 */
export declare function map_call<I extends unknown = unknown, O extends unknown = unknown>(fn_a: map_fn_T<I, O>[], ...arg_a: I[]): O[];
export { map_call as call__map };
