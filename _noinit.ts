export function _noinit<T>(fn: ()=>T, times = 1) {
	let times_called = 0
	return () => {
		if (times_called < times) {
			times_called += 1
			return
		}
		return fn()
	}
}
