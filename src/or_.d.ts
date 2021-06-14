import type { wrap_a_T } from './wrap_a_T';
import type { a_nowrap_T } from './a_nowrap_T';
/**
 * Returns first truthy or last item call or value in `a_unwrap`.
 */
export declare function or_<I extends unknown, O extends unknown>(a_unwrap: a_nowrap_T<I>): (I extends or_fn_callable_T<I> ? O : I) | undefined;
export interface or_fn_callable_T<I extends unknown = unknown> {
    (...args: wrap_a_T<I>): I;
}
/**
 * Returns function that returns first truthy or last item call or value in `a_unwrap`.
 */
export declare function _or_fn<I extends unknown, O extends unknown>(a_unwrap: a_nowrap_T<I>): (value: I) => (I extends or_fn_callable_T<I> ? O : I) | undefined;
export { or_ as on__fn, _or_fn as _or__fn, _or_fn as _fn__or__fn };
