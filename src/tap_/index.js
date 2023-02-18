/**
 * Returns function that calls tap with obj.
 * @param fn{import('../tap').tap__interceptor_T}
 * @returns {(val:unknown)=>unknown}
 */
export function tap_(fn) {
	return val=>{
		fn(val)
		return val
	}
}
export { tap_ as _tap, }
