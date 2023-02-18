import { andand } from '../andand/index.js'
/** @typedef {import('../andand').andand_key_T}andand_key_T */
/**
 * Returns `andand(obj, name_a) || or_fn(obj, val)`
 * @param obj{unknown|null}
 * @param name_a{andand_key_T[]}
 * @param or_{import('./index.d.ts').andand_or_T}
 * @returns {unknown}
 */
export function andand_or(obj, name_a, or_fn) {
	const val = andand(obj, ...name_a)
	return val || or_fn(val, obj)
}
export { andand_or as andand__or }
