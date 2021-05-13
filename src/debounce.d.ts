/**
 * Returns an async function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @see {link:https://davidwalsh.name/javascript-debounce-function}
 */
export declare function debounce<F extends Function>(func: F, wait: number, immediate?: boolean): debounce_fn_type;
export declare type debounce_fn_type = (this: unknown) => Promise<void>;
export declare type debounce_type<F extends Function> = (func: F, wait: number, immediate?: boolean) => debounce_fn_type;
