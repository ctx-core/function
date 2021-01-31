/**
 * Returns array with the index as each item.
 */
export function times<T = unknown>(num: number, fn: (idx: number) => T) {
	const a1 = [] as T[]
	for (let idx = 0; idx < num; idx++) {
		a1.push(fn(idx))
	}
	return a1
}
