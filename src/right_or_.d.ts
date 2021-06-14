import type { a_nowrap_T } from './a_nowrap_T';
/**
 * Returns function that returns first truthy or last item in `a_unwrap`.
 */
export declare function right_or_<Val extends unknown = unknown>(a_unwrap: a_nowrap_T<Val>): (fn_a_unwrap: Val) => unknown;
export { right_or_ as _right_or, right_or_ as _or__right, right_or_ as _or, };
