import { eq } from './eq'
import { wrap_concat } from './wrap_concat'
import type { a_nowrap_T } from './a_nowrap_T'
/**
 * Returns function that returns `==` operator to all values in `in_value_aS`.
 */
export function eq_<In extends unknown = unknown>(
	a_nowrap:a_nowrap_T<In>
):eq_fn_T<In> {
	return (value:In)=>eq<In>(wrap_concat<In>(a_nowrap, value))
}
export {
	eq_ as _eq,
	eq_ as _fn__eq,
}
export type eq_fn_T<In extends unknown = unknown> = (value:In)=>boolean 
