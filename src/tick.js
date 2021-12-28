/**
 * Calls setTimeout
 */ export function tick(fn, timeout = 0) {
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
//# sourceMappingURL=tick.js.map