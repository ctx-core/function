/**
 * Returns function that applies `===` operator to `compare` & `value`.
 */
export function _eql_fn(compare: unknown) {
	return (value: unknown)=>value === compare
}
export const _fn__eql = _eql_fn
