/**
 * @param fn{(...arg_a:unknown)=>unknown}
 * @param {unknown}arg_a
 * @returns {unknown}
 */
export function run(fn, ...arg_a) {
	return fn(...arg_a)
}
export { run as _ }
