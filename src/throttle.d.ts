/**
 * @see {link:https://remysharp.com/2010/07/21/throttling-function-calls}
 */
export declare function throttle<F extends Function>(fn: F, threshold?: number, scope?: unknown): (this: unknown) => void;
