/**
 * Returns function that applies `===` operator to `compare` & `value`.
 */
export function _eql_fn(compare) {
	return value=>value === compare
}
export const _fn__eql = _eql_fn
