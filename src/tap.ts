/**
 * Invokes interceptor with the obj, and then returns object.
 * The primary purpose of this method is to "tap into" a method chain,
 * in order to perform operations on intermediate results within the chain.
 * @see {@link https://underscorejs.org/#tap}
 */
export function tap<T = unknown>(obj: T, interceptor: tap_interceptor_T<T>) {
	interceptor(obj)
	return obj
}
export type tap_interceptor_T<T = unknown> = (obj: T) => void
