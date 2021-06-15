import type { tap_interceptor_T } from './tap';
/**
 * Returns function that calls tap with obj.
 */
export declare function tap_<Obj extends unknown = unknown>(obj: Obj): (interceptor: tap_interceptor_T) => Obj;
export { tap_ as _tap, };
