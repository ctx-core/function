import { wrap_a_ } from './wrap_a_'
import type { falsy } from './falsy'
/**
 * Returns the first falsy or last item function call or value in `in_value_a` .
 */
export function and_</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I
>/*@formatter:on*/(a_nowrap:I):O|falsy {
	const value_a = wrap_a_<I>(a_nowrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) return value as falsy
		if (typeof value === 'function') {
			const out_fn_value = value()
			if (!out_fn_value) return out_fn_value
		}
	}
	return
}
export {
	and_ as and__fn
}
