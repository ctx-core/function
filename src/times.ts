/**
 * Returns array with the index as each item.
 */
export function times<I extends unknown = unknown>(num:number, fn:(idx:number)=>I) {
	const a = [] as I[]
	for (let idx = 0; idx < num; idx++) {
		a.push(fn(idx))
	}
	return a
}
