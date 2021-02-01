import type { map_fn_type } from './map_fn_type';
/**
 * Returns function that returns map of calls to fn_a1 applying in_arg_a1 with ...arg_a1_
 */
export declare function _map_apply(fn_a1: map_fn_type[], in_arg_a1?: unknown[]): (...fn_arg_a1: unknown[]) => unknown[];
export { _map_apply as _apply__map };
