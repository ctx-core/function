/**
 * Returns not applied to the spread of `in_value_a1`
 */
import { _wrap_a1 } from './_wrap_a1'
export function not(in_value_a1) {
	const value_a1 = _wrap_a1(in_value_a1)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (value) return false
	}
	return true
}
