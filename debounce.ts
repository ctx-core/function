/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @see {link:https://davidwalsh.name/javascript-debounce-function}
 */
export function debounce<F extends Function>(func:F, wait?:number, immediate?:boolean):debounce_fn_type {
	let timeout:number|null
	return function (this:unknown) {
		const apply_this = this, args = arguments
		const later = () => {
			timeout = null
			if (!immediate) func.apply(apply_this, args)
		}
		const callNow = immediate && !timeout
		clearTimeout(timeout as number)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(apply_this, args)
	}
}
export type debounce_fn_type = (this:unknown)=>void
export type debounce_type<F extends Function> =
	(func:F, wait?:number, immediate?:boolean)=>
		debounce_fn_type
