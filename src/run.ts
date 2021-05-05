export function run<O extends unknown = unknown>(fn):O {
	return fn()
}
