import { concat } from './concat'
import { _wrap_a1 } from './_wrap_a1'
/**
 * [wrap](#wrap) `a1` & [concat](#concat) `rest_a1`
 */
export function wrap_concat(a1, ...rest_a1) {
	return concat(_wrap_a1(a1), ...rest_a1)
}
export const concat__wrap = wrap_concat;
