import { _wrap_a1 } from './_wrap_a1'
/**
 * Returns first truthy or last item call or value in `in_value_a1`.
 */
export function or_fn(in_value_a1) {
	const value_a1 = _wrap_a1(in_value_a1)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (!value) continue
		const fn_value =
			typeof value === 'function'
			? value()
			: value
		if (fn_value) return fn_value
	}
}
export const or__fn = or_fn
