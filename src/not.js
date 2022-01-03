import { wrap_a_ } from './wrap_a_.js'
/**
 * Returns not applied to the spread of `in_value_a`
 */ export function not(in_value_a) {
	const value_a = wrap_a_(in_value_a)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (value) return false
	}
	return true
}
