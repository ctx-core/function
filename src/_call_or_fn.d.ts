import type { falsy } from './falsy';
/**
 * Returns a function than returns first truthy value from fn_a1
 */
export declare function _call_or_fn<R extends unknown = unknown>(fn_a1: ((value: any) => R)[]): (value: any) => falsy | R;
export { _call_or_fn as _or_fn__call, _call_or_fn as _or__fn__call, };
