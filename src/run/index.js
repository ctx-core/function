import { nullish__check_ } from '../nullish__check_/index.js'
/**
 * @param fn{(...arg_a:unknown)=>unknown}
 * @param {unknown}arg_a
 * @returns {unknown}
 */
export function run(fn, ...arg_a) {
	return nullish__check_([fn], fn(...arg_a))
}
export { run as _ }
