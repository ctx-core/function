import { neq } from './neq.js'
import { wrap_concat } from './wrap_concat.js'
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 */
export function neq_<I extends unknown = unknown>(
	in_value_a:I|I[]
):(val_a:I)=>boolean {
	return (val_a:I)=>neq<I>(wrap_concat<I>(in_value_a, val_a))
}
export {
	neq_ as _neq,
}
