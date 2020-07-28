export declare type nullsy = null | undefined;
export declare type falsy = false | 0 | '' | nullsy;
export declare function _val(val: any): () => any;
/**
 * Array#`concat`
 * @param {[]} a1
 * @param {...*[]} rest_a1
 * @returns {Array.<*>}
 */
export declare function concat(a1?: any, ...rest_a1: any[]): any;
/**
 * Returns `value` if array & `[value]` otherwise
 * @param {*|*[]} value
 * @returns {*[]}
 */
export declare function _wrap_a1(value: any | any[]): any[];
export declare const _a1__wrap: typeof _wrap_a1;
/**
 * [wrap](#wrap) `a1` & [concat](#concat) `rest_a1`
 * @param {[]} a1
 * @param {...[]} rest_a1
 * @returns {[]}
 */
export declare function wrap_concat(a1: any, ...rest_a1: any[]): any;
export declare const concat__wrap: typeof wrap_concat;
/**
 * Calls the fn with ...arg_a1.
 * @param {function} fn
 * @param {...[]} arg_a1
 * @returns {*}
 */
export declare function call(fn: any, ...arg_a1: any[]): any;
/**
 * Returns function that calls ...arg_a1 concat with ...a1__args__ passed to function
 * @param {function} fn
 * @param {...[]} arg_a1
 * @returns {function(...[*]=): *}
 */
export declare function _call(fn: any, ...arg_a1: any[]): (...arg_a1_: any[]) => any;
/**
 * Returns the map of calls to fn_a1 with ...arg_a1.
 * @param {function} fn
 * @param {...[]} arg_a1
 * @returns {*}
 */
export declare function map_call(fn_a1: any, ...arg_a1: any[]): any;
export declare const call__map: typeof map_call;
/**
 * Returns function that maps calls to fn_al ...arg_a1 concat with ...a1__args__ passed to function
 * @param {function} fn
 * @param {...[]} arg_a1
 * @returns {function(...[*]=): *}
 */
export declare function _map_call(fn_a1: any, ...arg_a1: any[]): (...arg_a1_: any[]) => any;
export declare const _call__map: typeof _map_call;
/**
 * Returns function bound to self that calls ...arg_a1 concat with ...a1__args__ passed to function
 * @param {function} fn
 * @param self
 * @param {...[]} arg_a1
 * @returns {function(...[*]=): *}
 */
export declare function _bind_call(fn: any, self: any, ...arg_a1: any[]): (...arg_a1_: any[]) => any;
export declare const _call__bind: typeof _bind_call;
/**
 * Returns function bound to self that returns map of fn_al calls with ...arg_a1 concat with ...a1__args__ passed to function
 * @param {function} fn_a1
 * @param self
 * @param {...[]} arg_a1
 * @returns {function(...[*]=): *}
 */
export declare function _bind_map_call(fn_a1: any, self: any, ...arg_a1: any[]): (...arg_a1_: any[]) => any;
export declare const _call__map__bind: typeof _bind_map_call;
/**
 * Returns function that applies arg_a1 with ...arg_a1_
 * @param {function} fn
 * @param {...[]} arg_a1
 * @returns {function(...[*]=): *}
 */
export declare function _apply(fn: any, arg_a1?: any[]): (...arg_a1_: any[]) => any;
/**
 * Returns function that returns map of calls to fn_a1 applying arg_a1 with ...arg_a1_
 * @param {function} fn
 * @param {...[]} arg_a1
 * @returns {function(...[*]=): *}
 */
export declare function _map_apply(fn_a1: any, arg_a1?: any[]): (...arg_a1_: any[]) => any;
export declare const _apply__map: typeof _map_apply;
/**
 * Returns function bound to self that applies arg_a1 with ...arg_a1_
 * @param fn
 * @param self
 * @param args
 * @returns {function(...[*]=): *}
 */
export declare function _bind_apply(fn: any, self: any, args?: any[]): (...arg_a1_: any[]) => any;
export declare const _apply__bind: typeof _bind_apply;
/**
 * Returns function returning map of calls to fn_a1 bound to self that applies arg_a1 with ...arg_a1_
 * @param fn
 * @param self
 * @param args
 * @returns {function(...[*]=): *}
 */
export declare function _bind_map_apply(fn_a1: any, self: any, args?: any[]): (...arg_a1_: any[]) => (...arg_a1_: any[]) => any;
export declare const _apply__map__bind: typeof _bind_map_apply;
/**
 * Returns a Immediately-invoked function expression
 * @param {function} fn
 * @param {...[]} arg_a1
 * @returns {*}
 */
export declare function iife(fn: any, ...arg_a1: any[]): any;
/**
 * Argument for Array#slice
 * @typedef {[]} arg__slice
 */
/**
 * Returns a function that calls fn passing the arguments sliced by arg_a1__slice.
 * @param {function} fn
 * @param {...[arg_a1__slice]} Array#slice arguments to pass to fn
 * @returns {function(...[*]=): *}
 */
export declare function slice_arg_a1(fn: any, ...arg_a1__slice: any[]): (...arg_a1: any[]) => any;
export declare const slice__a1__arg: typeof slice_arg_a1;
/**
 * Returns a function that calls fn passing only the first argument.
 * @param {function} fn
 * @returns {function(...[*]=): *}
 */
export declare function arg__0__(fn: any): (...arg_a1: any[]) => any;
/**
 * Calls setTimeout
 * @param {function} fn
 * @param {number} timeout
 * @returns {Promise<number>}
 */
export declare function tick(fn: any, timeout?: number): Promise<unknown>;
/**
 * Composes a1__fn into a single function
 * @param {...[function]} a1__fn
 * @returns {*|(function(...[*]): *)}
 * @see {@link https://gist.github.com/JamieMason/172460a36a0eaef24233e6edb2706f83}
 */
export declare const compose: (...a1__fn: any[]) => any;
/**
 * Invokes interceptor with the obj, and then returns object.
 * The primary purpose of this method is to "tap into" a method chain,
 * in order to perform operations on intermediate results within the chain.
 * @param obj
 * @param {function} interceptor
 * @returns {*}
 * @see {@link https://underscorejs.org/#tap}
 */
export declare function tap(obj: any, interceptor: any): any;
/**
 * Returns function that calls tap with obj.
 * @param obj
 * @returns {function(*=): *}
 */
export declare function _tap(obj: any): (interceptor: any) => any;
/**
 * Returns `!value`
 * @param value
 * @returns {boolean}
 */
export declare function invert(value: any): boolean;
/**
 * Calls functions in fn_a1 with ...arg_a1
 * @param {[function]} fn_a1
 * @param {...[]} arg_a1
 * @returns {[]}
 */
export declare function call_fn_a1(fn_a1: any, ...arg_a1: any[]): any[];
export declare const call__a1__fn: typeof call_fn_a1;
/**
 * Returns function that does nothing
 */
export declare function noop(..._: any[]): void;
/**
 * Returns array with the index as each item.
 * @param {number} num
 * @param {function} fn
 * @returns {[]}
 */
export declare function times(num: any, fn: any): any[];
/**
 * Returns a function where the arguments to the wrapped function are sliced with idx__begin & idx__end.
 * @param {function}fn - Wrapped function
 * @param {number}[idx__begin] - Index of beginning of slice.
 * @param {number}[idx__end] - Index of end of slice
 */
export declare function _arg_a1__slice(fn: (...arg_a1: any[]) => any, idx__begin?: number, idx__end?: number): (...arg_a1: any[]) => any;
export declare const _a1__arg__slice: typeof _arg_a1__slice;
/**
 * Returns a function where the first `count` arguments are sent to the wrapped function.
 * @param {function}fn - Wrapped function
 * @param {number}count - Number of first arguments to send to the wrapped function.
 */
export declare function _arg_a1__head(fn: any, count?: number): (...arg_a1: any[]) => any;
export declare const _a1__arg__head: typeof _arg_a1__head;
/**
 * @typedef {string|number} arg__andand
 */
/**
 * @typedef {string|number|function} arg__andand_
 */
/**
 * Applies `&&` to a chain of properties from `obj`.
 * @param obj
 * @param {...string} name_a1
 * @returns {*}
 */
export declare function andand(obj: any, ...name_a1: any[]): any;
/**
 * Returns a function that calls `andand(obj, ...name_a1)`
 * @param {...string} name_a1
 * @returns {function(*=): *}
 */
export declare function _andand__one(...name_a1: any[]): (obj: any) => any;
export declare function _andand__many(...name_a1: any[]): (obj: any, ...arg_a1: any[]) => any;
export declare const _andand: typeof _andand__one;
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 * @param obj
 * @param {...arg__andand} name_a1
 * @returns {*}
 */
export declare function andand_(obj: any, ...name_a1: any[]): any;
export declare const andand__fn: typeof andand_;
/**
 * Returns a function that calls `andand_(obj, ...name_a1)`
 * @param {...arg__andand} name_a1
 * @returns {function(*=): *}
 */
export declare function _andand_(...name_a1: any[]): (obj: any) => any;
export declare const _fn__andand__fn: typeof _andand_;
/**
 * @typedef {function} fn__or
 * @param {*} val
 * @param {*} obj
 * @returns {*}
 */
/**
 * Returns `andand(obj, name_a1) || or_fn(obj, val)`
 * @param obj
 * @param {string[]} name_a1
 * @param {function(*, *): *} or_fn
 * @returns {*}
 */
export declare function andand_or(obj: any, name_a1: string[], or_fn: (val: any, obj: any) => any): any;
export declare const andand__or: typeof andand_or;
/**
 * Returns function that calls `andand_or(obj, name_a1, or_fn)`
 * @param {string[]} name_a1
 * @param {function(*, *): *} or_fn
 * @returns {function(*=): *}
 */
export declare function _andand_or__one(name_a1: any, or_fn: any): (obj: any) => any;
export declare const _andand__or__one: typeof _andand_or__one;
export declare function _andand_or__many(name_a1: any, or_fn: any): (obj: any, ...arg_a1: any[]) => any;
export declare const _andand__or__many: typeof _andand_or__many;
export declare const _andand__or: typeof _andand_or__one;
/**
 * Returns not applied to the spread of `value_a1__`
 * @param {*|*[]} value_a1__
 * @returns {boolean}
 */
export declare function not(value_a1__: any): boolean;
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): boolean}
 */
export declare function _not(value_a1__: any): (value_a1: any) => boolean;
/**
 * Returns the boolean of the truthiness all values in `value_a1__`
 * @param {*|*[]} value_a1__
 * @returns {boolean}
 */
export declare function notnot(value_a1__: any): boolean;
/**
 * Returns function that calls [notnot](#notnot) with [wrap_concat](#wrap_concat) of the arguments.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): boolean}
 */
export declare function _notnot(value_a1__: any): (value: any) => boolean;
/**
 * Returns `==` operator to all values in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {boolean}
 */
export declare function eq(value_a1__: any): boolean;
/**
 * Returns function that returns `==` operator to all values in `value_a1__S`.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): boolean}
 */
export declare function _eq(value_a1__: any | any[]): (value: any | any[]) => boolean;
export declare const _fn__eq: typeof _eq;
/**
 * Returns `!=` operator to all values in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {boolean}
 */
export declare function neq(value_a1__: any): boolean;
/**
 * Return function that Returns `!=` operator to all values in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): boolean}
 */
export declare function _neq(value_a1__: any): (value_a1: any) => boolean;
/**
 * Returns `===` operator to all values in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {boolean}
 */
export declare function eql(value_a1__: any): boolean;
/**
 * Returns function that returns `===` operator to all values in `value_a1__`.
 * @param value_a1__
 * @returns {function(*=): boolean}
 */
export declare function _eql(value_a1__: any): (value: any) => boolean;
/**
 * Returns function that applies `===` operator to `compare` & `value`.
 * @param {*} compare
 * @returns {function(*): boolean}
 */
export declare function _fn__eql(compare: any): (value: any) => boolean;
/**
 * Returns `!==` operator to all values in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {boolean}
 */
export declare function neql(value_a1__: any): boolean;
/**
 * Returns function that returns `!==` operator to all values in `value_a1__`.
 * @param value_a1__
 * @returns {function(*=): boolean}
 */
export declare function _neql(value_a1__: any): (value: any) => boolean;
/**
 * Returns the first falsy or last item in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {*}
 */
export declare function and(value_a1__: any): any;
/**
 * Returns function that returns the first falsy in `value_a1__` or `value`.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): *}
 */
export declare function _left_and(value_a1__: any): (value: any) => any;
export declare const _and__left: typeof _left_and;
/**
 * Returns function that returns the first falsy from `value` or `value_a1__` or the last value of `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): *}
 */
export declare function _right_and(value_a1__: any): (value: any) => any;
export declare const _and__right: typeof _right_and;
export declare const _and: typeof _right_and;
/**
 * Returns the first falsy or last item function call or value in `value_a1_` .
 * @param {*|*[]} value_a1_
 * @returns {*}
 */
export declare function and_fn(value_a1_: any): any;
export declare const and__fn: typeof and_fn;
/**
 * Returns function that returns the first falsy or last item function call or value in `value_a1__` .
 * @param {*|*[]} value_a1__
 * @returns {function(*=): *}
 */
export declare function _and_fn(value_a1__: any): (value_a1_: any) => any;
export declare const _and__fn: typeof _and_fn;
/**
 * Returns a function than returns the called a1__fn(value) chained with ands
 * @param a1__fn
 */
export declare function _and_fn_call(a1__fn: {
    (any: any): any;
}[]): (value: any) => boolean;
export declare const _and__fn__call: typeof _and_fn_call;
/**
 * Returns first truthy or last item in `value_a1_`.
 * @param {*|*[]} value_a1_
 * @returns {*}
 */
export declare function or(value_a1_: any): any;
/**
 * Returns function that returns first truthy item in `value_a1_` or value.
 * @param {*|*[]} value_a1_
 * @returns {function(*=): *}
 */
export declare function _left_or(value_a1_: any): (value: any) => any;
export declare const _or__left: typeof _left_or;
/**
 * Returns function that returns first truthy or last item in `value_a1_`.
 * @param {*|*[]} value_a1_
 * @returns {function(*=): *}
 */
export declare function _right_or(value_a1_: any): (value: any) => any;
export declare const _or__right: typeof _right_or;
export declare const _or: typeof _right_or;
/**
 * Returns first truthy or last item call or value in `value_a1_`.
 * @param {*|*[]} value_a1_
 * @returns {*}
 */
export declare function or_fn(value_a1_: any): any;
export declare const or__fn: typeof or_fn;
/**
 * Returns function that returns first truthy or last item call or value in `value_a1_`.
 * @param {*|*[]} value_a1_
 * @returns {*}
 */
export declare function _or_fn(value_a1_: any): (value: any) => any;
export declare const _or__fn: typeof _or_fn;
export declare const _fn__or__fn: typeof _or_fn;
/**
 * Returns a function than returns first truthy value from fn_a1
 * @param fn_a1
 */
export declare function _or_fn__call(fn_a1: {
    (any: any): any;
}[]): (value: any) => any;
export declare const _or__fn__call: typeof _or_fn__call;
/**
 * Returns `fn__if(conditional)` if `conditional` else `fn__else(conditional)`
 * @param conditional
 * @param {function(*): *} fn__if
 * @param {function(*): *} fn__else
 * @returns {*}
 */
export declare function ifelse(conditional: any, fn__if: any, fn__else: any): any;
/**
 * Returns first obj property that is in the obj
 * @param obj
 * @param name_a1
 */
export declare function or_in(obj: any, name_a1: any): any;
export declare const or__in: typeof or_in;
/**
 * Returns first obj property that is truthy
 * @param obj
 * @param name_a1
 */
export declare function or_property(obj: any, name_a1: any): any;
export declare const or__property: typeof or_property;
