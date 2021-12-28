import { promise_timeout } from './promise_timeout.js'
import { sleep } from './sleep.js'
export async function waitfor(fn, timeout, period = 0) {
	await promise_timeout(async ()=>{
		for (; ;) {
			if (await fn()) return
			await sleep(period)
		}
	}, timeout)
}
//# sourceMappingURL=waitfor.js.map