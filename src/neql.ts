import { wrap_a_ } from './wrap_a_.js'
/**
 * Returns `!==` operator to all values in `a_unwrap`.
 */
export function neql<I extends unknown = unknown>(a_unwrap:I):boolean {
	const value_a = wrap_a_<I>(a_unwrap)
	let current_value = value_a[0]
	for (let i = 1; i < value_a.length; i++) {
		const value = value_a[i]
		if (current_value === value) return false
	}
	return true
}
