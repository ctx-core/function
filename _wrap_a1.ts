import type { wrap_a1_type } from './wrap_a1_type'
import type { a_nowrap_type } from './a_nowrap_type'
const { isArray } = Array
/**
 * Returns `value` if array & `[value]` otherwise
 */
export function _wrap_a1<I extends unknown>(value:a_nowrap_type<I>) {
	return (
		isArray(value)
		? value as I
		: [value] as I[]
	) as wrap_a1_type<I>
}
export const _a1__wrap = _wrap_a1
