import type { tap_interceptor_T } from './tap';
/**
 * Returns function that calls tap with obj.
 */
export declare function tap_<I extends unknown = unknown>(obj: I): (interceptor: tap_interceptor_T) => I;
export { tap_ as _tap, };
