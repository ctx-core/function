/**
 * Returns a Immediately-invoked function expression
 */
export function iife<T = unknown>(fn: (...[]) => T, ...arg_a1: unknown[]) {
	return fn(...arg_a1)
}
