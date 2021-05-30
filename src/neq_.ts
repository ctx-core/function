import { neq } from './neq'
import { wrap_concat } from './wrap_concat'
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 */
export function neq_<I extends unknown = unknown>(in_value_a:I|I[]) {
	return (value_a:I)=>neq<I>(wrap_concat<I>(in_value_a, value_a))
}
export {
	neq_ as _neq,
}
