import { concat } from './concat'
import { _wrap_a1 } from './_wrap_a1'
/**
 * [wrap](#wrap) `a1` & [concat](#concat) `rest_a1`
 */
export function wrap_concat<I = unknown>(a1: I|I[], ...rest_a1: I[]|I[][]) {
	return concat(_wrap_a1<I>(a1), ...rest_a1) as I[]
}
export const concat__wrap = wrap_concat;
