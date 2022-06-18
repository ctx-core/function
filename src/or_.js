import { wrap_a_ } from './wrap_a_/index.js'
import { wrap_concat } from './wrap_concat/index.js'
/**
 * Returns first truthy or last item call or value in `a_unwrap`.
 */
export function or_(a_unwrap) {
	const value_a = wrap_a_(a_unwrap)
	for (let i = 0; i < value_a.length; i++) {
		const value = value_a[i]
		if (!value) continue
		const fn_value = typeof value === 'function' ? value() : value
		if (fn_value) return fn_value
	}
	return
}
/**
 * Returns function that returns first truthy or last item call or value in `a_unwrap`.
 */
export function or_fn_(a_unwrap) {
	return (val)=>or_(wrap_concat(a_unwrap, val))
}
export { or_ as on__fn, or_fn_ as _or__fn, or_fn_ as _fn__or__fn }
