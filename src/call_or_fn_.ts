import type { falsy } from './falsy.js'
/**
 * Returns a function than returns first truthy value from fn_a
 */
export function call_or_fn_<Val extends unknown = unknown, Out extends unknown = unknown>(
	fn_a:((value:Val)=>Out)[]
):(value:Val)=>Out|falsy {
	return (value:Val)=>{
		let out_value:Out|falsy = null
		for (let i = 0; i < fn_a.length; i += 1) {
			out_value = fn_a[i](value)
			if (out_value) return out_value as Out
		}
		return out_value as Out|falsy
	}
}
export {
	call_or_fn_ as _call_or_fn,
	call_or_fn_ as _or_fn__call,
	call_or_fn_ as _or__fn__call,
}
