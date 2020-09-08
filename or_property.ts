/**
 * Returns first obj property that is truthy
 */
export function or_property(obj, name_a1) {
	for (let i = 0; i < name_a1.length; i++) {
		const name = name_a1[i]
		const value = obj[name]
		if (value) return value
	}
}
export const or__property = or_property
