import { wrap_a_ } from '../wrap_a_/index.js'
/**
 * Returns first truthy or last item in `a_unwrap`.
 */
export function or(a_unwrap) {
	const value_a = wrap_a_(a_unwrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (value) return value
	}
	return
}
