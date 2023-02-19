/**
 * Returns function that calls tap with obj.
 * @param {import('../tap').tap__interceptor_T}fn
 * @returns {(val:unknown)=>unknown}
 */
export function tap_(fn) {
	return val=>{
		fn(val)
		return val
	}
}
export { tap_ as _tap, }
