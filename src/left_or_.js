import { or } from './or.js'
import { wrap_concat } from './wrap_concat.js'
/**
 * Returns function that returns first truthy item in `a_unwrap` or value.
 */ export function left_or_(a_unwrap) {
	return (val)=>or(wrap_concat(a_unwrap, val))

}
export { left_or_ as _left_or, left_or_ as _or__left, }
