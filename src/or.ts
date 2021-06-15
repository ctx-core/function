import { wrap_a_ } from './wrap_a_'
import type { wrap_a_T } from './wrap_a_T'
/**
 * Returns first truthy or last item in `a_unwrap`.
 */
export function or<Val extends unknown = unknown>(
	a_unwrap:Val|wrap_a_T<Val>
):Val|undefined {
	const value_a = wrap_a_<Val>(a_unwrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (value) return value as Val
	}
}
