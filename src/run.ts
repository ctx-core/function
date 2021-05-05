export function run<O extends unknown = unknown>(fn:()=>O):O {
	return fn()
}
