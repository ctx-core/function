import { concat } from './concat.js'
import { wrap_a_ } from './wrap_a_.js'
import { wrap_aa_ } from './wrap_aa_.js'
/**
 * [wrap](#wrap) `a_unwrap` & [concat](#concat) `rest_a`
 */ export function wrap_concat(a_unwrap, ...rest_a) {
	return concat(wrap_a_(a_unwrap), ...wrap_aa_(rest_a))
}
export { wrap_concat as concat__wrap }
