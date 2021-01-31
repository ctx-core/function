export function falsy_guard<O extends unknown = unknown>(label: string, ...fns: Function[]): O {
  for (const fn of fns) {
    const rv: O = fn()
    if (rv) return rv
  }
  throw `${label} cannot be falsy`
}
export {
	falsy_guard as falsish_guard
}
