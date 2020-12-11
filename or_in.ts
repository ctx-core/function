/**
 * Returns first obj property that is in the obj
 */
export function or_in<T = unknown>(obj: T, name_a1: string[]) {
	for (let i = 0; i < name_a1.length; i++) {
		const name = name_a1[i]
		if (name in obj) return name
	}
}
export const or__in = or_in