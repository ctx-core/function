/**
 * Composes fn_a1 into a single function
 * @see {@link https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83}
 */
export declare function compose(...fn_a1: compose_fn_type[]): compose_fn_type;
export declare type compose_fn_type = (...[]: Iterable<any>) => any;
