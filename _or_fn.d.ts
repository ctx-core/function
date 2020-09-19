/**
 * Returns function that returns first truthy or last item call or value in `in_value_a1`.
 */
export declare function _or_fn<T = unknown, R = unknown>(in_value_a1: T[]): (value: T) => (T extends import("./or_fn").or_fn_callable_type ? R : T) | undefined;
export declare const _or__fn: typeof _or_fn;
export declare const _fn__or__fn: typeof _or_fn;
