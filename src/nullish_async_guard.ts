export async function nullish_async_guard<O extends unknown = unknown>(label: string, ...fns: Function[]): Promise<O> {
  for (const fn of fns) {
    const rv: O = await fn()
    if (rv != null) return rv
  }
  throw `${label} cannot be nullish`
}
export {
	nullish_async_guard as nullsy_async_guard
}
