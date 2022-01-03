const { isArray } = Array
/**
 * Returns `value` if array & `[value]` otherwise
 */ export function wrap_a_(value) {
	return isArray(value) ? value : [
		value
	]
}
export { wrap_a_ as wrap_a1_, wrap_a_ as wrap_a_fn, wrap_a_ as wrap_a1_fn, wrap_a_ as _wrap_a1, wrap_a_ as _a1__wrap }
