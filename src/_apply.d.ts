import type { bind_call_type } from './bind_call_type';
import type { call_fn_type } from './call_fn_type';
/**
 * Returns function that applies in_arg_a1 with ...fn_arg_a1
 */
export declare function _apply</*@formatter:off*/ A1 extends unknown[] = unknown[], O1 extends unknown = unknown, A2 extends unknown[] = unknown[], O2 extends unknown = unknown>(fn: call_fn_type<A2, O2>, in_arg_a1?: unknown[]): bind_call_type<A1, O1>;
