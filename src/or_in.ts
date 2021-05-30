/**
 * Returns first obj property that is in the obj
 */
export function or_in<obj_T extends object = object>(obj:obj_T, name_a:string[]):string|undefined {
	for (let i = 0; i < name_a.length; i++) {
		const name = name_a[i]
		if (name in obj) return name
	}
	return
}
export {
	or_in as or__in
}
