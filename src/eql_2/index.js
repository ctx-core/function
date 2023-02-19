/**
 * Returns function that applies `===` operator to `compare` & `value`.
 * @param {unknown}compare
 * @returns {(val:unknown)=>boolean}
 */
export function eql_2(compare) {
	return val=>val === compare
}
export {
	eql_2 as _eql_fn,
	eql_2 as _fn__eql,
}
