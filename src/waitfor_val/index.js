import { promise_timeout } from '../promise_timeout/index.js'
import { sleep } from '../sleep/index.js'
/**
 * @param fn{()=>Promise<unknown>}
 * @param condition_fn{(val:unknown)=>unknown}
 * @param timeout{number}
 * @param [period]{number}
 * @returns {Promise<unknown>}
 */
export async function waitfor_val(fn, condition_fn, timeout, period = 0) {
	return await promise_timeout(async ()=>{
		for (; ;) {
			const val = await fn()
			if (condition_fn(val)) return val
			await sleep(period)
		}
	}, timeout)
}
