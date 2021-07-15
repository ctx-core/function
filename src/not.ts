import { wrap_a_ } from './wrap_a_.js'
import type { a_nowrap_T } from './a_nowrap_T.js'
/**
 * Returns not applied to the spread of `in_value_a`
 */
export function not<I extends unknown = unknown>(in_value_a:a_nowrap_T<I>):boolean {
	const value_a = wrap_a_<I>(in_value_a)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (value) return false
	}
	return true
}
