import { wrap_a_ } from './wrap_a_.js'
/**
 * Returns the first falsy or last item function call or value in `in_value_a` .
 */
export function and_(a_nowrap) {
	const value_a = wrap_a_(a_nowrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) return value
		if (typeof value === 'function') {
			const out_fn_value = value()
			if (!out_fn_value) return out_fn_value
		}
	}
	return
}
export { and_ as and__fn }
