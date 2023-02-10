export declare type a_item_T<I extends unknown = unknown> = I extends readonly (infer O)[] ? O : I
export declare type a1_item_type<I extends unknown = unknown> = a_item_T<I>
export declare type a1_item_T<I extends unknown = unknown> = a_item_T<I>
export declare type a_nowrap_T<I extends unknown = unknown> = I|readonly I[]|readonly I[][]
export declare type ANowrapT = a_nowrap_T
export declare type bind_call_T<
	A extends readonly unknown[] = readonly unknown[],
	O extends unknown = unknown
> = (...fn_arg_a:A)=>O
export declare type bind_call_type = bind_call_T
export declare type call_fn_T<
	A extends readonly unknown[] = readonly unknown[],

	O extends unknown = unknown
> = (...args:A)=>O
export declare type call_fn_type = call_fn_T
export declare type falsy = false|0|typeof NaN|''|nullish
export declare type map_fn_T<
	I extends unknown = unknown,
	Ret extends unknown = unknown
> = (...arg_a:I[])=>Ret
export declare type maybe<I, F = falsy> = I|F
export declare type maybe_undefined<I> = maybe<I, undefined>
export declare type maybe_null<I> = maybe<I, null>
export declare type nf = null|false
export declare type nullish = null|undefined
export declare type nullsy = nullish
export declare type promise_resolve_T<T> = (value:T|PromiseLike<T>)=>void
export declare type promise_reject_T = (reason?:any)=>void
export declare type Timeout = ReturnType<typeof setTimeout>
export declare type valueof<T> = T[keyof T]
export declare type wrap_a_item_T<
	I extends unknown = unknown
> = wrap_a_T<I> extends readonly (infer O)[][] ? O : never
export declare type wrap_a1_item_type = wrap_a_item_T
export declare type wrap_a_T<I extends unknown = unknown> = I extends readonly unknown[] ? I : readonly I[]
export declare type wrap_a1_T = wrap_a_T
export declare type wrap_a1_type = wrap_a_T
export declare type wrap_a_T2<I extends unknown = unknown> = readonly I[]|readonly I[][]|wrap_a_T<I>|wrap_aa_T<I>
export declare type wrap_aa_T<I extends unknown = unknown> = (
	I extends readonly unknown[][]
	? I
	: I extends readonly unknown[]
		? readonly I[]
		: readonly I[][])
export declare type wrap_aa_type = wrap_aa_T
export declare type wrap_aa_item_T<
	I extends unknown = unknown
> = wrap_aa_T<I> extends readonly (infer O)[][] ? O : never
export declare type wrapA2ItemT = wrap_aa_item_T
