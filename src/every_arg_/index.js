/**
 * @param {Function}fn
 * @param {Function}every_fn
 * @param {any}or
 * @return {function(...[*]): *}
 * @private
 */
export function every_arg_(fn, every_fn = $=>$ != null, or = ()=>null) {
	return (...arg_a)=>{
		return arg_a.every(every_fn) ? fn(...arg_a) : or()
	}
}
