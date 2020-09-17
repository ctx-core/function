/**
 * Returns first obj property that is truthy
 */
export function or_property<T = unknown>(obj: T, name_a1: string[]) {
	for (let i = 0; i < name_a1.length; i++) {
		const name = name_a1[i]
		const value = (obj as any)[name]
		if (value) return value as T[keyof T]
	}
}
export const or__property = or_property
