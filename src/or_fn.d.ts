import type { wrap_a1_type } from './wrap_a1_type';
import type { a_nowrap_type } from './a_nowrap_type';
/**
 * Returns first truthy or last item call or value in `a1_unwrap`.
 */
export declare function or_fn<I extends unknown, O extends unknown>(a1_unwrap: a_nowrap_type<I>): (I extends or_fn_callable_type<I> ? O : I) | undefined;
export interface or_fn_callable_type<I extends unknown = unknown> {
    (...args: wrap_a1_type<I>): I;
}
/**
 * Returns function that returns first truthy or last item call or value in `a1_unwrap`.
 */
export declare function _or_fn<I extends unknown, O extends unknown>(a1_unwrap: a_nowrap_type<I>): (value: I) => (I extends or_fn_callable_type<I> ? O : I) | undefined;
export { or_fn as on__fn, _or_fn as _or__fn, _or_fn as _fn__or__fn };
