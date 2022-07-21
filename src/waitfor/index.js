import { promise_timeout } from '../promise_timeout/index.js'
import { sleep } from '../sleep/index.js'
export async function waitfor(fn, timeout, period = 0) {
	await promise_timeout(async ()=>{
		for (; ;) {
			if (await fn()) return
			await sleep(period)
		}
	}, timeout)
}
