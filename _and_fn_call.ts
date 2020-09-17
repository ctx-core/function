import type { falsy } from './falsy'
/**
 * Returns a function than returns the called fn_a1(value) chained with ands
 */
export function _and_fn_call(fn_a1:((in_value: unknown)=>any)[]) {
	return (in_value: unknown)=>{
		let out_value = true
		for (let i = 0; i < fn_a1.length; i += 1) {
			out_value = out_value && fn_a1[i](in_value)
			if (!out_value) return out_value as falsy
		}
		return out_value
	}
}
export const _and__fn__call = _and_fn_call
