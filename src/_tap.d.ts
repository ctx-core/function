import type { tap_interceptor_type } from './tap';
/**
 * Returns function that calls tap with obj.
 */
export declare function _tap<T = unknown>(obj: T): (interceptor: tap_interceptor_type) => T;
