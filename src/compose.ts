/**
 * Composes fn_a1 into a single function
 * @see {@link https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83}
 */
export function compose(...fn_a1:compose_fn_type[]) {
	return fn_a1.reduceRight(
		(prev_fn: compose_fn_type, next_fn: compose_fn_type)=>
			((...arg_a1:[])=>next_fn(prev_fn(...arg_a1)) as compose_fn_type),
		((value: unknown)=>value) as compose_fn_type
	) as compose_fn_type
}
export type compose_fn_type = (...[])=>any
