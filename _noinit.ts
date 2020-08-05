export function _noinit(fn: (...args)=>any, times = 1) {
	let times_called = 0
	return (...args) => {
		if (times_called < times) {
			times_called += 1
			return
		}
		return fn(...args)
	}
}
