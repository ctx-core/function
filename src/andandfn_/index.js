import { andandfn } from '../andandfn/index.js'
/** @typedef {import('../andand').andand_key_T}andand_key_T */
/**
 * Returns a function that calls `andand_(obj, ...name_a)`
 * @param name_a{andand_key_T}
 * @returns {import('../andandfn').andandfn_T}
 */
export function andandfn_(...name_a) {
	return (obj)=>andandfn(obj, ...name_a)
}
export {
	andandfn_ as _andand_,
	andandfn_ as _fn__andand__fn,
}
