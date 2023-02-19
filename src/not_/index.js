import { not } from '../not/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 * @param {import('../_types').a_nowrap_T}a_unwrap
 * @returns {import('./index.d.ts').not_T}
 */
export function not_(a_unwrap) {
	return (val_a)=>not(wrap_concat(a_unwrap, val_a))
}
export { not_ as _not, }
