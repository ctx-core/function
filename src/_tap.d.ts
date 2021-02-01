import type { tap_interceptor_type } from './tap';
/**
 * Returns function that calls tap with obj.
 */
export declare function _tap<I extends unknown = unknown>(obj: I): (interceptor: tap_interceptor_type) => I;
