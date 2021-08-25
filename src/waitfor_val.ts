import { promise_timeout } from './promise_timeout.js'
import { sleep } from './sleep.js'
export async function waitfor_val<Val>(fn:()=>Promise<Val>, condition_fn:(val:Val)=>any, timeout:number):Promise<void> {
	await promise_timeout(async ()=>{
		for (; ;) {
			const val = await fn()
			if (condition_fn(val)) return val
			await sleep(0)
		}
	}, timeout)
}
