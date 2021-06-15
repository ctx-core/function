import type { falsy } from './falsy'
export async function falsy_async_guard<Val extends unknown = unknown>(
	label:string, ...fns:(()=>Promise<Val|falsy>)[]
):Promise<Val|falsy> {
	for (const fn of fns) {
		const rv = await fn()
		if (rv)
			return rv
	}
	throw `${label} cannot be falsy`
}
export { falsy_async_guard as falsish_async_guard }
