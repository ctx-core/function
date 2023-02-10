import { andandfn } from '../andandfn/index.js'
/**
 * Returns a function that calls `andand_(obj, ...name_a)`
 */
export function andandfn_(...name_a) {
	return (obj)=>andandfn(obj, ...name_a)
}
export {
	andandfn_ as _andand_,
	andandfn_ as _fn__andand__fn,
}
