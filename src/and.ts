import { wrap_a_ } from './wrap_a_'
import type { a_nowrap_T } from './a_nowrap_T'
/**
 * Returns the first falsy or last item in `a_nowrap`.
 */
export function and<I extends unknown = unknown>(a_nowrap:a_nowrap_T<I>) {
	const value_a = wrap_a_(a_nowrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value)
			return value
	}
	return value_a[value_a.length - 1]
}
