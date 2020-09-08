/**
 * Composes fn_a1 into a single function
 * @see {@link https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83}
 */
export const compose = (...fn_a1)=>
	fn_a1.reduceRight(
		(prev_fn, fn__next)=>
			(...arg_a1)=>fn__next(prev_fn(...arg_a1)),
		value=>value
	)
