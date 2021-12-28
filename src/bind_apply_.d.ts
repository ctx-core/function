import type { bind_call_T, call_fn_T } from './_types'
/**
 * Returns function bound to self that applies arg_a with ...arg_a_
 */
export declare function bind_apply_<Self extends unknown = unknown, A_outer extends unknown = unknown, A_inner extends unknown[] = unknown[], Out extends unknown = unknown>(/*@formatter:on*/ fn: call_fn_T<A_inner, Out>, self: Self, in_arg_a?: A_outer): bind_call_T<A_inner, Out>;
export { bind_apply_ as _bind_apply, bind_apply_ as _apply__bind, };
