import type { call_fn_type } from './call_fn_type';
/**
 * Returns function returning map of calls to fn_a1 bound to self that applies arg_a1 with ...arg_a1_
 */
export declare function _bind_map_apply<R = unknown>(fn_a1: call_fn_type<R>[], self: any, in_arg_a1?: unknown[]): (...fn_arg_a1: unknown[]) => R[];
export declare const _apply__map__bind: typeof _bind_map_apply;
