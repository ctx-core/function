export async function falsy_async_guard<O extends unknown = unknown>(label: string, ...fns: Function[]): Promise<O> {
  for (const fn of fns) {
    const rv: O = await fn()
    if (rv) return rv
  }
  throw `${label} cannot be falsy`
}
export {
	falsy_async_guard as falsish_async_guard
}
