/**
 * Returns a function that calls fn passing the arguments sliced by slice_arg_a.
 */
export declare function slice_arg_spread_a<In extends unknown[] = unknown[], Out extends unknown[] = unknown[]>(fn: slice_arg_spread_a_fn_T, begin_idx?: number, end_idx?: number): (...arg_a: In[]) => unknown[];
export declare type slice_arg_spread_a_fn_T<In extends unknown[] = unknown[], Out extends unknown[] = unknown[]> = (...arg_a: In[]) => Out;
export { slice_arg_spread_a as slice_arg_a1, slice_arg_spread_a as slice__a1__arg, };
