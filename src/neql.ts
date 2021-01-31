import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns `!==` operator to all values in `a1_unwrap`.
 */
export function neql<I extends unknown = unknown>(a1_unwrap: I): boolean {
	const value_a1 = _wrap_a1<I>(a1_unwrap)
	let current_value = value_a1[0]
	for (let i = 1; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (current_value === value) return false
	}
	return true
}
