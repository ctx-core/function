import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns the boolean of the truthiness all values in `in_value_a1`
 */
export function notnot<I>(in_value_a1: I|I[]): boolean {
	const value_a1 = _wrap_a1<I>(in_value_a1)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (!value) return false
	}
	return true
}