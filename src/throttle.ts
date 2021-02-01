import type { Timeout } from './Timeout'
/**
 * @see {link:https://remysharp.com/2010/07/21/throttling-function-calls}
 */
export function throttle<F extends Function>(fn:F, threshold = 250, scope?:unknown) {
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