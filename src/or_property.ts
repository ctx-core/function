/**
 * Returns first obj property that is truthy
 */
export function or_property<I extends unknown = unknown>(obj:I, name_a1:string[]):I[keyof I]|undefined {
	for (let i = 0; i < name_a1.length; i++) {
		const name = name_a1[i]
		const value = (obj as any)[name]
		if (value) return value as I[keyof I]
	}
	return
}
export {
	or_property as or__property
}
