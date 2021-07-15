import type { Timeout } from './Timeout.js'
/**
 * @see {link:https://remysharp.com/2010/07/21/throttling-function-calls}
 */
export function throttle<F extends Function, This extends unknown>(
	fn:F, threshold = 250, scope?:unknown
):(this:This)=>void {
	threshold || (threshold = 250)
	let last: number, deferTimer: Timeout
	return function (this:unknown) {
		const context = scope || this
		const now = +new Date, args = arguments
		if (last && now < last + threshold) {
			// hold on to it
			clearTimeout(deferTimer)
			deferTimer = setTimeout(()=>{
				last = now
				fn.apply(context, args)
			}, threshold)
		} else {
			last = now
			fn.apply(context, args)
		}
	}
}
