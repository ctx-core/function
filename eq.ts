import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns `==` operator to all values in `a1_nowrap`.
 */
export function eq<I extends unknown>(a1_nowrap: I): boolean {
	const value_a1 = _wrap_a1<I>(a1_nowrap) as unknown[]
	let current_value = value_a1[0]
	for (let i = 1; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (current_value != value) return false
	}
	return true
}
export type eq_type<I extends unknown> = (a1_nowrap: I) => boolean
