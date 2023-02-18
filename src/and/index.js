import { wrap_a_ } from '../wrap_a_/index.js'
/**
 * Returns the first falsy or last item in `a_nowrap`.
 * @param a_nowrap{import('../_types').a_nowrap_T}
 * @returns {unknown}
 */
export function and(a_nowrap) {
	const value_a = wrap_a_(a_nowrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) return value
	}
	return value_a[value_a.length - 1]
}
