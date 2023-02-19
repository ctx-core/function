import { eq } from '../eq/index.js'
import { wrap_concat } from '../wrap_concat/index.js'
/**
 * Returns function that returns `==` operator to all values in `in_value_aS`.
 * @param {import('../_types').a_nowrap_T}a_nowrap
 * @returns {import('./index.d.ts').eq_fn_T}
 */
export function eq_(a_nowrap) {
	return (value)=>eq(wrap_concat(a_nowrap, value))
}
export {
	eq_ as _eq,
	eq_ as _fn__eq,
}
