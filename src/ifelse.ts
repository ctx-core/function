/**
 * Returns `if_fn(conditional)` if `conditional` else `else_fn(conditional)`
 */
export function ifelse<T extends unknown = unknown, I = T, E = I>(
	conditional:T, if_fn:(conditional:T)=>I, else_fn:(conditional:T)=>E
):I|E {
	return (
		conditional
		? if_fn(conditional)
		: else_fn(conditional)
	)
}
