import type { falsy } from './falsy'
/**
 * Returns a function than returns first truthy value from fn_a1
 */
export function _call_or_fn<R = unknown>(fn_a1:((value:any)=>R)[]) {
	return (value:any)=>{
		let out_value:R|falsy = null
		for (let i = 0; i < fn_a1.length; i += 1) {
			out_value = fn_a1[i](value)
			if (out_value) return out_value as R
		}
		return out_value as R|falsy
	}
}
export const _or_fn__call = _call_or_fn
export const _or__fn__call = _call_or_fn
