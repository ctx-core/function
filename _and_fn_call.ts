/**
 * Returns a function than returns the called fn_a1(value) chained with ands
 */
export function _and_fn_call(fn_a1:{ (any):any }[]) {
	return in_value=>{
		let out_value = true
		for (let i = 0; i < fn_a1.length; i += 1) {
			out_value = out_value && fn_a1[i](in_value)
			if (!out_value) return out_value
		}
		return out_value
	}
}
export const _and__fn__call = _and_fn_call
