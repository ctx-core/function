/**
 * Calls setTimeout
 */
export function tick<T = unknown>(fn: () => T, timeout = 0) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			let rv
			try {
				if (fn) rv = fn()
			} catch (e) {
				reject(e)
				return
			}
			resolve(rv)
		}, timeout)
	})
}
