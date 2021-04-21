/**
 * Composes fn_a1 into a single function
 * @see {@link https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83}
 */
export declare function compose<O extends unknown = unknown>(...fn_a1: compose_fn_type[]): compose_fn_type<O>;
export declare type compose_fn_type<O extends unknown = unknown> = (...[]: Iterable<any>) => O;
