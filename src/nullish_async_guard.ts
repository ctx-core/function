import type { nullish } from './nullish'
export async function nullish_async_guard<Val extends unknown = unknown>(
	label:string, ...fns:(()=>Promise<nullish|Val>)[]
) {
	for (const fn of fns) {
		const rv = await fn()
		if (rv != null)
			return rv
	}
	throw `${label} cannot be nullish`
}
export { nullish_async_guard as nullsy_async_guard }
