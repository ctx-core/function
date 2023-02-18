/**
 * Returns array with the index as each item.
 * @param num{number}
 * @param fn{(idx:number)=>unknown}
 * @returns {unknown[]}
 */
export function times(num, fn) {
	const a = []
	for (let idx = 0; idx < num; idx++) {
		a.push(fn(idx))
	}
	return a
}
