/**
 * Returns first truthy or last item call or value in `in_value_a1`.
 */
export declare function or_fn<T = unknown, R = unknown>(in_value_a1: T[]): T extends or_fn_callable_type ? R : T;
export declare const or__fn: typeof or_fn;
export interface or_fn_callable_type {
    (...args: unknown[]): unknown;
}
