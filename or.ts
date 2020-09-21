import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns first truthy or last item in `a1_unwrap`.
 */
export function or<I extends unknown>(a1_unwrap: I) {
	const value_a1 = _wrap_a1<I>(a1_unwrap)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (value) return value
	}
}
