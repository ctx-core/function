import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns first truthy or last item in `in_value_a1`.
 */
export function or<T = unknown>(in_value_a1: T[]) {
	const value_a1 = _wrap_a1(in_value_a1)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (value) return value
	}
}
