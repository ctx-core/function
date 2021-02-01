/**
 * Calls setTimeout
 */
export declare function tick<I extends unknown = unknown>(fn: () => I, timeout?: number): Promise<unknown>;
