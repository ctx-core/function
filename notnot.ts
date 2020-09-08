import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns the boolean of the truthiness all values in `in_value_a1`
 */
export function notnot(in_value_a1) {
	const value_a1 = _wrap_a1(in_value_a1)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (!value) return false
	}
	return true
}
