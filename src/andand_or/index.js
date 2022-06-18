import { andand } from '../andand/index.js'
/**
 * Returns `andand(obj, name_a) || or_fn(obj, val)`
 */
export function andand_or(obj, name_a, or_fn) {
	const val = andand(obj, ...name_a)
	return val || or_fn(val, obj)
}
export { andand_or as andand__or }
