/**
 * Calls functions in fn_a with ...arg_a
 */
export function call_fn_a<RVal extends unknown = unknown>(
	fn_a:((...arg_a:unknown[])=>RVal)[], ...arg_a:unknown[]
):RVal[] {
	const returns:RVal[] = []
	for (let i = 0; i < fn_a.length; i++) {
		returns.push(fn_a[i](...arg_a))
	}
	return returns
}
export {
	call_fn_a as call__a1__fn,
}
