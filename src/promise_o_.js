export function promise_o_() {
	let resolve = null, reject = null
	const promise = new Promise((in_resolve, in_reject)=>{
		resolve = in_resolve
		reject = in_reject
	})
	return {
		promise,
		resolve: resolve,
		reject: reject
	}
}
//# sourceMappingURL=promise_o_.js.map