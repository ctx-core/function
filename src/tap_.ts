import type { tap_interceptor_T } from './tap.js'
/**
 * Returns function that calls tap with obj.
 */
export function tap_<Obj = unknown>(
	fn:tap_interceptor_T<Obj>
):(obj:Obj)=>Obj {
	return (obj:Obj)=>{
		fn(obj)
		return obj
	}
}
export {
	tap_ as _tap,
}
