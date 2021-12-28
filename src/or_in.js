/**
 * Returns first obj property that is in the obj
 */ export function or_in(obj, name_a) {
	for (let i = 0; i < name_a.length; i++) {
		const name = name_a[i]
		if (name in obj) return name
	}
	return
}
export { or_in as or__in }
//# sourceMappingURL=or_in.js.map