export function nullish_guard(label, ...fns) {
	for (const fn of fns) {
		const rv = fn()
		if (rv != null) return rv
	}
	throw `${label} cannot be nullish`
}
export { nullish_guard as nullsy_guard }
