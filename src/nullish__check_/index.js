/**
 * @param {unknown[]}a
 * @param {(...$:unknown[])=>unknown}_
 * @returns {unknown}
 */
export function nullish__check_(a, _) {
	for (const v of a) {
		if (v === undefined) return undefined
	}
	for (const v of a) {
		if (v === null) return null
	}
	return _(...a)
}
