/**
 * Returns array with the index as each item.
 */
export function times(num, fn) {
	const a1 = []
	for (let i = 0; i < num; i++) {
		a1.push(fn(i))
	}
	return a1
}
