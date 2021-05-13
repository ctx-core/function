import { _wrap_a1 } from './_wrap_a1'
import type { falsy } from './falsy'
/**
 * Returns the first falsy or last item function call or value in `in_value_a1` .
 */
export function and_fn</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = unknown
>/*@formatter:on*/(a1_nowrap:I):O|falsy {
	const value_a1 = _wrap_a1<I>(a1_nowrap)
	for (let i = 0; i < value_a1.length; i++) {
		const value = value_a1[i]
		if (!value) return value as falsy
		if (typeof value === 'function') {
			const out_fn_value = value()
			if (!out_fn_value) return out_fn_value
		}
	}
	return
}
export {
	and_fn as and__fn
}
