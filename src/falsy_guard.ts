import type { falsy } from './falsy.js'
export function falsy_guard<Val extends unknown = unknown>(
	label:string, ...fns:(()=>(Val|falsy))[]
):Val|falsy {
	for (const fn of fns) {
		const rv = fn()
		if (rv)
			return rv
	}
	throw `${label} cannot be falsy`
}
export { falsy_guard as falsish_guard }
