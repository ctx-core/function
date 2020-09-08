const { isArray } = Array
/**
 * Returns `value` if array & `[value]` otherwise
 */
export function _wrap_a1<T = any>(value:T|T[]):T[] {
	return (
		isArray(value)
		? value as T[]
		: [value]
	)
}
export const _a1__wrap = _wrap_a1
