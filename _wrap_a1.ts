import type { a1_nowrap_type } from './a1_nowrap_type'
const { isArray } = Array
/**
 * Returns `value` if array & `[value]` otherwise
 */
export function _wrap_a1<I = unknown>(value:a1_nowrap_type<I>) {
	return (
		isArray(value)
		? value as I[]
		: [value] as I[]
	)
}
export const _a1__wrap = _wrap_a1
