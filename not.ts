import { _wrap_a1 } from './_wrap_a1'
import type { a_nowrap_type } from './a_nowrap_type'
/**
 * Returns not applied to the spread of `in_value_a1`
 */
export function not<I extends unknown = unknown>(in_value_a1: a_nowrap_type<I>): boolean {
	const value_a1 = _wrap_a1<I>(in_value_a1)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (value) return false
	}
	return true
}
