import { eq } from './eq.js'
import { wrap_concat } from './wrap_concat.js'
/**
 * Returns function that returns `==` operator to all values in `in_value_aS`.
 */ export function eq_(a_nowrap) {
	return (value)=>eq(wrap_concat(a_nowrap, value))

}
export { eq_ as _eq, eq_ as _fn__eq, }
