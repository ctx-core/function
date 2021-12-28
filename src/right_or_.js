import { concat } from './concat.js'
import { or } from './or.js'
import { wrap_a_ } from './wrap_a_.js'
/**
 * Returns function that returns first truthy or last item in `a_unwrap`.
 */ export function right_or_(a_unwrap) {
	return (fn_a_unwrap)=>or(concat(wrap_a_(fn_a_unwrap), ...wrap_a_(a_unwrap)))

}
export { right_or_ as _right_or, right_or_ as _or__right, right_or_ as _or, }
//# sourceMappingURL=right_or_.js.map