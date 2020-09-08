/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 */
export function andand_(obj, ...name_a1) {
	let value = obj
	for (let i = 0; i < name_a1.length; i++) {
		if (!value) break
		const segment = name_a1[i]
		let value__ = (value && value[segment])
		value__ = value__ || ((typeof segment === 'function') ? segment(value) : value__)
		value =
			(value__ && typeof value__ === 'function')
			? value__.call(value)
			: value__
	}
	return value
}
export const andand__fn = andand_
