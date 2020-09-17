/**
 * Array#`concat`
 */
export function concat(a1?: unknown[], ...rest_a1: unknown[]) {
	return (a1 || []).concat(...rest_a1)
}
