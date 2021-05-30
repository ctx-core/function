import { wrap_a_ } from './wrap_a_'
import type { wrap_a_T } from './wrap_a_T'
/**
 * Returns `!=` operator to all values in `in_value_a`.
 */
export function neq<I extends unknown = unknown>(
	in_value_a: wrap_a_T<I>
): boolean {
	const value_a = wrap_a_<I>(in_value_a)
	let current_value = value_a[0]
	for (let i = 1; i < value_a.length; i++) {
		const value = value_a[i]
		if (current_value == value) return false
	}
	return true
}
