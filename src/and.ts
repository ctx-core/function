import { wrap_a_ } from './wrap_a_.js'
import type { a_nowrap_T } from './a_nowrap_T.js'
import type { falsy } from './falsy.js'
/**
 * Returns the first falsy or last item in `a_nowrap`.
 */
export function and</*@formatter:off*/
	I extends unknown = unknown,
	O extends unknown = I
>/*@formatter:on*/(
	a_nowrap:a_nowrap_T<I>
):O|falsy {
	const value_a = wrap_a_(a_nowrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value)
			return value as falsy
	}
	return value_a[value_a.length - 1] as O
}
