import type { wrap_a_T } from '../_types'
/**
 * Returns first truthy or last item in `a_unwrap`.
 */
export declare function or<Val extends unknown = unknown>(a_unwrap:Val|wrap_a_T<Val>):Val|undefined;
