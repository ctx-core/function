/**
 * Returns a function than returns first truthy value from fn_a1
 */
export declare function _call_or_fn<R = unknown>(fn_a1: ((value: any) => R)[]): (value: any) => number | false | "" | R;
export declare const _or_fn__call: typeof _call_or_fn;
export declare const _or__fn__call: typeof _call_or_fn;
