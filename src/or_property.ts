/**
 * Returns first obj property that is truthy
 */
export function or_property<I extends unknown = unknown>(obj:I, name_a:string[]):I[keyof I]|undefined {
	for (let i = 0; i < name_a.length; i++) {
		const name = name_a[i]
		const value = (obj as any)[name]
		if (value) return value as I[keyof I]
	}
	return
}
export {
	or_property as or__property
}
