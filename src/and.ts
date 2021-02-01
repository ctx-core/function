import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns the first falsy or last item in `a1_nowrap`.
 */
export function and<I extends unknown = unknown>(a1_nowrap: I) {
	const value_a1 = _wrap_a1<I>(a1_nowrap)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (!value) return value
	}
	return value_a1[value_a1.length - 1]
}