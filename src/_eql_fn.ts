/**
 * Returns function that applies `===` operator to `compare` & `value`.
 */
export function _eql_fn(compare: unknown) {
	return (value: unknown)=>value === compare
}
export {
	_eql_fn as _fn__eql
}