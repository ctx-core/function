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
export function debounce<F extends Function, Out extends unknown = unknown>(
	func:F, wait:number, immediate?:boolean
):debounce_fn_T<Out> {
	let timeout:Timeout|number|null, promise:Promise<Out>|null, resolve:promise_resolve_T<Out>, reject:promise_reject_T
	return async function (this:unknown, ...arg_a):Promise<Out> {
		if (!promise) promise = new Promise<Out>((in_resolve, in_reject)=>{
			resolve = in_resolve
			reject = in_reject
		})
		const apply_this = this
		const later = async ()=>{
			timeout = null
			promise = null
			if (!immediate) {
				await invoke()
			}
		}
		const callNow = immediate && !timeout
		clearTimeout(timeout as Timeout)
		timeout = setTimeout(later, wait)
		if (callNow) {
			await invoke()
		}
		return promise
		async function invoke() {
			try {
				const in_rv = func.apply(apply_this, arg_a)
				resolve(
					isPromise(in_rv)
					? (await (in_rv as Promise<Out>))
					: (in_rv as Out)
				)
			} catch (e) {
				reject(e)
			}
		}
	}
}
export type debounce_fn_T<Out extends unknown = unknown> = (this:unknown)=>Promise<Out>
export type debounce_T<F extends Function> =
	(func:F, wait:number, immediate?:boolean)=>
		debounce_fn_T
