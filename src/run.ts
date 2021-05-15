export function run<O extends unknown = unknown>(
	fn:(...args:any[])=>O, ...args:any[]
):O {
	return fn(...args)
}
