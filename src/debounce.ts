import { isPromise } from './isPromise.js'
import type { promise_reject_T, promise_resolve_T } from './promise.js'
import type { Timeout } from './Timeout.js'
/**
 * Returns an async function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @see {link:https://davidwalsh.name/javascript-debounce-function}
 */
export function debounce<F extends Function>(
	func:F, wait:number, immediate?:boolean
):debounce_fn_T {
	let timeout:Timeout|number|null
	let promise:Promise<any>|null, resolve:promise_resolve_T<any>, reject:promise_reject_T
	return async function (this:unknown, ...arg_a) {
		if (!promise) promise = new Promise((in_resolve, in_reject)=>{
			resolve = in_resolve
			reject = in_reject
		})
		const apply_this = this
		let rv:any, error:any
		const later = async ()=>{
			timeout = null
			promise = null
			if (!immediate) {
				try {
					rv = func.apply(apply_this, arg_a)
				} catch (e) {
					error = e
				}
			}
			if (isPromise(rv)) {
				await rv
			}
			if (error) {
				reject(error)
			} else {
				resolve(null)
			}
		}
		const callNow = immediate && !timeout
		clearTimeout(timeout as Timeout)
		timeout = setTimeout(later, wait)
		if (callNow) {
			try {
				rv = func.apply(apply_this, arg_a)
			} catch (e) {
				error = e
			}
		}
		return promise
	}
}
export type debounce_fn_T = (this:unknown)=>Promise<void>
export type debounce_T<F extends Function> =
	(func:F, wait:number, immediate?:boolean)=>
		debounce_fn_T
