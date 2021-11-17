import type { a_nowrap_T } from './a_nowrap_T.js'
import { wrap_a_ } from './wrap_a_.js'
/**
 * Returns `==` operator to all values in `a_nowrap`.
 */
export function eq<In extends unknown = unknown>(a_nowrap:a_nowrap_T<In>):boolean {
	const value_a = wrap_a_<In>(a_nowrap) as unknown[]
	let current_value = value_a[0]
	for (let i = 1; i < value_a.length; i++) {
		const value = value_a[i]
		if (current_value != value) return false
	}
	return true
}
export type eq_T<I extends unknown = unknown> = (a_nowrap:I)=>boolean
