import type { falsy } from './_types'
/**
 * Returns a function than returns first truthy value from fn_a
 */
export declare function call_or_fn_<Val extends unknown = unknown, Out extends unknown = unknown>(fn_a:((value:Val)=>Out)[]):(value:Val)=>Out|falsy;
export { call_or_fn_ as _call_or_fn, call_or_fn_ as _or_fn__call, call_or_fn_ as _or__fn__call, }
