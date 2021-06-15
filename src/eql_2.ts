/**
 * Returns function that applies `===` operator to `compare` & `value`.
 */
export function eql_2<Val extends unknown = unknown>(compare:Val):(val:Val)=>boolean {
	return (val:Val)=>val === compare
}
export {
	eql_2 as _eql_fn,
	eql_2 as _fn__eql,
}
