/**
 * Returns array with the index as each item.
 */
export function times<I extends unknown = unknown>(num:number, fn:(idx:number)=>I) {
	const a1 = [] as I[]
	for (let idx = 0; idx < num; idx++) {
		a1.push(fn(idx))
	}
	return a1
}
