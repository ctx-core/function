/**
 * Calls setTimeout
 * @param {()=>unknown}fn
 * @param {number}[timeout]
 * @returns {Promise<unknown>}
 */
export function tick(fn, timeout = 0) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			try {
				resolve(fn())
			} catch (e) {
				reject(e)
				return
			}
		}, timeout)
	})
}
