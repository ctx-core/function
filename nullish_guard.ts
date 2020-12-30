export function nullish_guard<O extends unknown = unknown>(label: string, ...fns: Function[]): O {
  for (const fn of fns) {
    const rv: O = fn()
    if (rv != null) return rv
  }
  throw `${label} cannot be nullish`
}
export {
	nullish_guard as nullsy_guard
}
