/** @typedef {import('../_types').nullish}nullish */
/**
 * @param {unknown[]}a
 * @param {(...$:unknown[])=>unknown}_
 * @param {(nullish:nullish)=>any}[onnullish]
 * @returns {unknown}
 */
export function nullish__check_(a, _, onnullish) {
	for (const v of a) {
		if (v === undefined) {
			if (onnullish) onnullish(undefined)
			return undefined
		}
	}
	for (const v of a) {
		if (v === null) {
			if (onnullish) onnullish(null)
			return null
		}
	}
	return _(...a)
}
