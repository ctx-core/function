/**
 * Returns the first falsy or last item function call or value in `in_value_a1` .
 */
import { _wrap_a1 } from './_wrap_a1'
export function and_fn(in_value_a1) {
	const value_a1 = _wrap_a1(in_value_a1)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (!value) return value
		if (typeof value === 'function') {
			const out_fn_value = value()
			if (!out_fn_value) return out_fn_value
		}
	}
}
export const and__fn = and_fn
