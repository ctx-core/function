/**
 * Returns a function than returns first truthy value from fn_a1
 */
export function _call_or_fn(fn_a1:{ (any):any }[]) {
	return value=>{
		let value_
		for (let i = 0; i < fn_a1.length; i += 1) {
			value_ = fn_a1[i](value)
			if (value_) return value_
		}
		return value_
	}
}
export const _or_fn__call = _call_or_fn
export const _or__fn__call = _call_or_fn
