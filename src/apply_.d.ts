import type { bind_call_T, call_fn_T } from './_types'
/**
 * Returns function that applies in_arg_a with ...fn_arg_a
 */
export declare function apply_<A1 extends unknown[] = unknown[], O1 extends unknown = unknown, A2 extends unknown[] = unknown[], O2 extends unknown = unknown>(fn:call_fn_T<A2, O2>, in_arg_a?:unknown[]):bind_call_T<A1, O1>;
export { apply_ as _apply, }
