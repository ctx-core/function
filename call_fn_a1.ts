/**
 * Calls functions in fn_a1 with ...arg_a1
 */
export function call_fn_a1(fn_a1: ((...arg_a1: unknown[]) => any)[], ...arg_a1: unknown[]) {
	const returns = [] as unknown[]
	for (let i = 0; i < fn_a1.length; i++) {
		returns.push(fn_a1[i](...arg_a1))
	}
	return returns
}
export const call__a1__fn = call_fn_a1
