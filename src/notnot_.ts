import { notnot } from './notnot'
import { wrap_concat } from './wrap_concat'
/**
 * Returns function that calls [notnot](#notnot) with [wrap_concat](#wrap_concat) of the arguments.
 */
export function notnot_<Val extends unknown = unknown>(
	in_value_a:Val|Val[]
):(val:Val)=>boolean {
	return (val:Val)=>notnot(wrap_concat<Val>(in_value_a, val))
}
export type notnot_T<Val extends unknown = unknown> = (val:Val)=>boolean
export {
	notnot_ as _notnot,
}
