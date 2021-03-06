import type { nullish } from './nullish.js'
export function nullish_guard<Val extends unknown = unknown>(
	label:string, ...fns:(()=>(nullish|Val))[]
):Val|nullish {
	for (const fn of fns) {
		const rv = fn()
		if (rv != null)
			return rv
	}
	throw `${label} cannot be nullish`
}
export { nullish_guard as nullsy_guard }
