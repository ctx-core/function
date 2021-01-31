export function _noinit(fn: (...args: unknown[])=>any, times = 1) {
	let times_called = 0
	return (...args: unknown[]) => {
		if (times_called < times) {
			times_called += 1
			return
		}
		return fn(...args)
	}
}
