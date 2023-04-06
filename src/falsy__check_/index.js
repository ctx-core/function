/** @typedef {import('../_types').falsy}falsy */
/**
 * @param {unknown[]}a
 * @param {(...$:unknown[])=>unknown}_
 * @param {(falsy:falsy)=>any}[onfalsy]
 * @returns {unknown}
 */
export function falsy__check_(a, _, onfalsy) {
	for (const v of a) {
		if (v === undefined) {
			if (onfalsy) onfalsy(undefined)
			return undefined
		}
	}
	for (const v of a) {
		if (v === null) {
			if (onfalsy) onfalsy(null)
			return null
		}
	}
	return _(...a)
}
