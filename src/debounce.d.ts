/**
 * Returns an async function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @see {link:https://davidwalsh.name/javascript-debounce-function}
 */
export declare function debounce<Out extends unknown = unknown, Args extends any[] = []>(
	func:(...args:Args)=>Promise<Out>, wait:number, immediate?:boolean):debounce_fn_T<Out, Args>;
export declare type debounce_fn_T<Out extends unknown = unknown, Args extends any[] = []> =
	(this:unknown, ...args:Args)=>Promise<Out>;
export declare type debounce_T<Out extends unknown = unknown, Args extends any[] = []> =
	(func:(...args:Args)=>Promise<Out>, wait:number, immediate?:boolean)=>debounce_fn_T;
