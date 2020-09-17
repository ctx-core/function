import { _wrap_a1 } from './_wrap_a1'
import type { a1_nowrap_type } from './a1_nowrap_type'
/**
 * Returns `==` operator to all values in `in_value_a1`.
 */
export function eq<I = unknown>(in_value_a1: a1_nowrap_type<I>): boolean {
	const value_a1 = _wrap_a1(in_value_a1)
	let value__current = value_a1[0]
	for (let i = 1; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (value__current != value) return false
	}
	return true
}
export type eq_type<I = unknown> = (in_value_a1: a1_nowrap_type<I>) => boolean
