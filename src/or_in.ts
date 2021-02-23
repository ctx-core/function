/**
 * Returns first obj property that is in the obj
 */
export function or_in<obj_T extends object = object>(obj:obj_T, name_a1:string[]) {
	for (let i = 0; i < name_a1.length; i++) {
		const name = name_a1[i]
		if (name in obj) return name
	}
}
export {
	or_in as or__in
}
