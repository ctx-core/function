import type { map_fn_T } from './map_fn_T';
/**
 * Returns function that returns map of calls to fn_a applying in_arg_a with ...arg_a_
 */
export declare function map_apply_(fn_a: map_fn_T[], in_arg_a?: unknown[]): (...fn_arg_a: unknown[]) => unknown[];
export { map_apply_ as map_fn_apply_fn, map_apply_ as _map_apply, map_apply_ as _apply__map, };
