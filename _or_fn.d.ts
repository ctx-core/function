import type { a_nowrap_type } from './a_nowrap_type';
/**
 * Returns function that returns first truthy or last item call or value in `a1_unwrap`.
 */
export declare function _or_fn<I extends unknown, O extends unknown>(a1_unwrap: a_nowrap_type<I>): (value: I) => (I extends import("./or_fn").or_fn_callable_type<I> ? O : I) | undefined;
export declare const _or__fn: typeof _or_fn;
export declare const _fn__or__fn: typeof _or_fn;
