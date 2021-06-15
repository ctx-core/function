import { wrap_a_ } from './wrap_a_'
/**
 * Returns the boolean of the truthiness all values in `in_value_a`
 */
export function notnot<I>(in_value_a:I|I[]):boolean {
	const value_a = wrap_a_<I>(in_value_a)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) return false
	}
	return true
}
