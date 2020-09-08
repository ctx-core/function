import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns `!=` operator to all values in `in_value_a1`.
 */
export function neq(in_value_a1) {
	const value_a1 = _wrap_a1(in_value_a1)
	let value__current = value_a1[0]
	for (let i = 1; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (value__current == value) return false
	}
	return true
}
