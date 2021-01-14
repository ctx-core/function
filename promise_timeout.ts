import type { Timeout } from './Timeout'
export async function promise_timeout<O extends unknown = unknown>(promise:Promise<O>, ms:number):Promise<O> {
	let id:Timeout
	const error = new Error(`Timed out after ${ms}ms.`)
	let timeout = new Promise((_resolve, reject)=>{
		id = setTimeout(()=>reject(error), ms)
	})
	return Promise.race([
		promise,
		timeout
	]).then((result)=>{
		clearTimeout(id)
		return result as O
	})
}
