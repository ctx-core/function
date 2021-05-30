/**
 * Composes fn_a into a single function
 * @see {@link https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83}
 */
export function compose<O extends unknown = unknown>(...fn_a:compose_fn_type[]) {
	return fn_a.reduceRight(
		(prev_fn: compose_fn_type, next_fn: compose_fn_type)=>
			((...arg_a:[])=>next_fn(prev_fn(...arg_a)) as compose_fn_type),
		((value: unknown)=>value) as compose_fn_type
	) as compose_fn_type<O>
}
export type compose_fn_type<O extends unknown = unknown> = (...[])=>O
