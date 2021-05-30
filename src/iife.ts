/**
 * Returns a Immediately-invoked function expression
 */
export function iife<T extends unknown = unknown>(fn: (...[]) => T, ...arg_a: unknown[]) {
	return fn(...arg_a)
}
