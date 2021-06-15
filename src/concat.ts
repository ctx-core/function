/**
 * Array#`concat`
 */
export function concat<I extends unknown = unknown>(
	a?: I[], ...rest_a: I[]|I[][]
):I[] {
	return ((a || []) as I[]).concat(...rest_a) as I[]
}
export function maybe_concat<I extends unknown = unknown>(
	a?: I[], ...rest_a: I[]|I[][]
):I[] {
	return ((a || []) as I[]).concat(...rest_a) as I[]
}
