import type { a_nowrap_T, wrap_a_T } from './_types'
/**
 * Returns first truthy or last item call or value in `a_unwrap`.
 */
export declare function or_<Val extends unknown, Ret extends unknown>(a_unwrap:a_nowrap_T<Val>):or_T<Val, Ret>;
export interface or_fn_callable_T<I extends unknown = unknown> {
	(...args:wrap_a_T<I>):I;
}
export declare type or_T<Val extends unknown, Ret extends unknown> =
	(Val extends or_fn_callable_T<Val> ? Ret : Val)
	|undefined;
/**
 * Returns function that returns first truthy or last item call or value in `a_unwrap`.
 */
export declare function or_fn_<Val extends unknown, Ret extends unknown>(a_unwrap:a_nowrap_T<Val>):(val:Val)=>or_T<Val, Ret>;
export declare type or_fn_T<Val extends unknown, Ret extends unknown> = (val:Val)=>or_T<Val, Ret>;
export { or_ as on__fn, or_fn_ as _or__fn, or_fn_ as _fn__or__fn }
