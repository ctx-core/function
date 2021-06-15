/**
 * Calls setTimeout
 */
export function tick<Out extends unknown = unknown>(
	fn:()=>Out, timeout = 0
):Promise<Out|undefined> {
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
