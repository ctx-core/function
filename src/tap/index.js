/**
 * Invokes interceptor with the obj, and then returns object.
 * The primary purpose of this method is to "tap into" a method chain,
 * in order to perform operations on intermediate results within the chain.
 * @param {unknown}obj
 * @param {import('./index.d.ts').tap__interceptor_T}interceptor
 * @returns {unknown}
 * @see {@link https://underscorejs.org/#tap}
 */
export function tap(obj, interceptor) {
	interceptor(obj)
	return obj
}
