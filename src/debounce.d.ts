/**
 * Returns an async function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @see {link:https://davidwalsh.name/javascript-debounce-function}
 */
export declare function debounce<Out extends unknown = unknown, F extends Function = Function>(func:F, wait:number, immediate?:boolean):debounce_fn_T<Out>;
export declare type debounce_fn_T<Out extends unknown = unknown> = (this:unknown)=>Promise<Out>;
export declare type debounce_T<F extends Function> = (func:F, wait:number, immediate?:boolean)=>debounce_fn_T;
