export function noinit_<Arg extends unknown = unknown, Ret extends unknown = unknown>(
	fn:(...args:Arg[])=>Ret, times = 1
):noinit_T<Arg, Ret> {
	let times_called = 0
	return (...args:Arg[])=>{
		if (times_called < times) {
			times_called += 1
			return
		}
		return fn(...args)
	}
}
export type noinit_T<Arg extends unknown = unknown, Ret extends unknown = unknown> =
	(...args:Arg[])=>
		Ret|undefined
export {
	noinit_ as _noinit,
}
