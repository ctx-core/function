import type { a_nowrap_T } from './a_nowrap_T.js'
import { wrap_a_ } from './wrap_a_.js'
/**
 * Returns a function where the arguments to the wrapped function are sliced with begin_idx & end_idx.
 */
export function slice_arg_a_<In extends unknown = unknown, Out extends unknown[] = unknown[]>(
	fn:slice_arg_a_fn_T<In, Out>, begin_idx?:number, end_idx?:number
):slice_arg_a_T<In, Out> {
	return (arg_a:a_nowrap_T<In>)=>
		fn(wrap_a_(arg_a).slice(begin_idx, end_idx) as In[])
}
export type slice_arg_a_fn_T<In extends unknown = unknown, Out extends unknown[] = unknown[]> =
	(arg_a:a_nowrap_T<In>)=>Out
export type slice_arg_a_T<In extends unknown = unknown, Out extends unknown[] = unknown[]> =
	(arg_a:a_nowrap_T<In>)=>Out
export {
	slice_arg_a_ as slice_arg_a1_fn,
	slice_arg_a_ as _slice_arg_a1,
	slice_arg_a_ as _arg_a1__slice,
	slice_arg_a_ as _a1__arg__slice,
}
