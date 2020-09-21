import type { wrap_a1_type } from './wrap_a1_type';
import type { a_nowrap_type } from './a_nowrap_type';
/**
 * Returns first truthy or last item call or value in `a1_unwrap`.
 */
export declare function or_fn<I extends unknown, O extends unknown>(a1_unwrap: a_nowrap_type<I>): (I extends or_fn_callable_type<I> ? O : I) | undefined;
export declare const or__fn: typeof or_fn;
export interface or_fn_callable_type<I extends unknown> {
    (...args: wrap_a1_type<I>): I;
}
