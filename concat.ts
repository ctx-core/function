/**
 * Array#`concat`
 */
export function concat<I extends unknown = unknown>(
	a1?: I[], ...rest_a1: I[]|I[][]
) {
	return ((a1 || []) as I[]).concat(...rest_a1) as I[]
}
export function maybe_concat<I extends unknown = unknown>(
	a1?: I[], ...rest_a1: I[]|I[][]
) {
	return ((a1 || []) as I[]).concat(...rest_a1) as I[]
}
