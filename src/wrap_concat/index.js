import { concat } from '../concat/index.js'
import { wrap_a_ } from '../wrap_a_/index.js'
import { wrap_aa_ } from '../wrap_aa_/index.js'
/**
 * [wrap](#wrap) `a_unwrap` & [concat](#concat) `rest_a`
 * @param a_unwrap{import('../_types').a_nowrap_T}
 * @param rest_a{import('../_types').wrap_a_T2}
 * @returns {import('../_types').wrap_a_T}
 */
export function wrap_concat(a_unwrap, ...rest_a) {
	return concat(wrap_a_(a_unwrap), ...wrap_aa_(rest_a))
}
export { wrap_concat as concat__wrap }
