import { notnot } from './notnot'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that calls [notnot](#notnot) with [wrap_concat](#wrap_concat) of the arguments.
 */
export function notnot_<I extends unknown = unknown>(in_value_a: I|I[]) {
	return (value: I)=>notnot(wrap_concat<I>(in_value_a, value))
}
export {
	notnot_ as _notnot,
}
