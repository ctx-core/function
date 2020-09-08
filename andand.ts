/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export function andand(obj, ...name_a1) {
	let value = obj
	for (let i = 0; i < name_a1.length; i++) {
		const segment = name_a1[i]
		const value__ = (value && value[segment])
		value =
			value__
			|| (typeof segment === 'function' ? segment(value) : value__)
	}
	return value
}
