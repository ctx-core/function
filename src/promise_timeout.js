export async function promise_timeout(promise, ms, error = new Error(`Timed out after ${ms}ms.`)) {
	let id
	let timeout = new Promise((_resolve, reject)=>{
		id = setTimeout(()=>reject(error)
			, ms)
	})
	return Promise.race([
		typeof promise === 'function' ? promise() : promise,
		timeout
	]).then((result)=>{
		clearTimeout(id)
		return result
	})
}
