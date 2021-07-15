import type { Timeout } from './Timeout.js'
export async function promise_timeout<O extends unknown = unknown>(
	promise:(()=>Promise<O>)|Promise<O>, ms:number, error = new Error(`Timed out after ${ms}ms.`)
):Promise<O> {
	let id:Timeout
	let timeout = new Promise((_resolve, reject)=>{
		id = setTimeout(()=>reject(error), ms)
	})
	return Promise.race([
		typeof promise === 'function' ? promise() : promise,
		timeout
	]).then((result)=>{
		clearTimeout(id)
		return result as O
	})
}
