import type { falsy } from '../_types'
/**
 * Returns function that returns the first falsy or last item function call or value in `in_value_a` .
 */
export declare function and_2<A_outer extends unknown[] = unknown[], A_inner extends unknown[] = unknown[], O extends unknown = unknown>(in_value_a:A_inner):(fn_value_a:A_outer)=>O|falsy;
export { and_2 as _and_fn, and_2 as _and__fn, }
