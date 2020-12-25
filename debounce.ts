import { isPromise } from './isPromise'
import type { promise_reject_type, promise_resolve_type } from './promise'
import type { Timeout } from './Timeout'
/**
 * Returns an async function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @see {link:https://davidwalsh.name/javascript-debounce-function}
 */
export function debounce<F extends Function>(func:F, wait?:number, immediate?:boolean):debounce_fn_type {
	let timeout:Timeout|number|null
	let promise:Promise<any>|null, resolve: promise_resolve_type<any>, reject: promise_reject_type
	return async function (this:unknown) {
		if (!promise) promise = new Promise((in_resolve, in_reject) => {
			resolve = in_resolve
			reject = in_reject
		})
		const apply_this = this, args = arguments
		let rv: any, error: any
		const later = async ()=>{
			timeout = null
			promise = null
			if (!immediate) {
				try {
					rv = func.apply(apply_this, args)
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
				rv = func.apply(apply_this, args)
			} catch (e) {
				error = e
			}
		}
		return promise
	}
}
export type debounce_fn_type = (this:unknown)=>Promise<void>
export type debounce_type<F extends Function> =
	(func:F, wait?:number, immediate?:boolean)=>
		debounce_fn_type
