export declare type nullsy = null | undefined;
export declare type falsy = false | 0 | '' | nullsy;
export declare function _val(val: any): () => any;
/**
 * Array#`concat`
 * @param {[]} a1
 * @param {...*[]} a1__rest
 * @returns {Array.<*>}
 */
export declare function concat(a1?: any, ...a1__rest: any[]): any;
/**
 * Returns `value` if array & `[value]` otherwise
 * @param {*|*[]} value
 * @returns {*[]}
 */
export declare function _a1__wrap(value: any | any[]): any[];
/**
 * [wrap](#wrap) `a1` & [concat](#concat) `a1__rest`
 * @param {[]} a1
 * @param {...[]} a1__rest
 * @returns {[]}
 */
export declare function concat__wrap(a1: any, ...a1__rest: any[]): any;
/**
 * Calls the fn with ...a1__arg.
 * @param {function} fn
 * @param {...[]} a1__arg
 * @returns {*}
 */
export declare function call(fn: any, ...a1__arg: any[]): any;
/**
 * Returns function that calls ...a1__arg concat with ...a1__args__ passed to function
 * @param {function} fn
 * @param {...[]} a1__arg
 * @returns {function(...[*]=): *}
 */
export declare function _call(fn: any, ...a1__arg: any[]): (...args__: any[]) => any;
/**
 * Returns function bound to self that calls ...a1__arg concat with ...a1__args__ passed to function
 * @param {function} fn
 * @param self
 * @param {...[]} a1__arg
 * @returns {function(...[*]=): *}
 */
export declare function _call__bind(fn: any, self: any, ...a1__arg: any[]): (...args__: any[]) => any;
/**
 * Returns function that applies a1__arg with ...args__
 * @param {function} fn
 * @param {...[]} a1__arg
 * @returns {function(...[*]=): *}
 */
export declare function _apply(fn: any, a1__arg?: any[]): (...args__: any[]) => any;
/**
 * Returns function bound to self that applies a1__arg with ...args__
 * @param fn
 * @param self
 * @param args
 * @returns {function(...[*]=): *}
 */
export declare function _apply__bind(fn: any, self: any, args?: any[]): (...args__: any[]) => any;
/**
 * Returns a Immediately-invoked function expression
 * @param {function} fn
 * @param {...[]} a1__arg
 * @returns {*}
 */
export declare function iife(fn: any, ...a1__arg: any[]): any;
/**
 * Argument for Array#slice
 * @typedef {[]} arg__slice
 */
/**
 * Returns a function that calls fn passing the arguments sliced by a1__arg__slice.
 * @param {function} fn
 * @param {...[arg__slice]} Array#slice arguments to pass to fn
 * @returns {function(...[*]=): *}
 */
export declare function slice__a1__arg(fn: any, ...a1__arg__slice: any[]): (...a1__arg: any[]) => any;
/**
 * Returns a function that calls fn passing only the first argument.
 * @param {function} fn
 * @returns {function(...[*]=): *}
 */
export declare function arg__0__(fn: any): (...a1__arg: any[]) => any;
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
 * Calls functions in a1__fn with ...a1__arg
 * @param {[function]} a1__fn
 * @param {...[]} a1__arg
 * @returns {[]}
 */
export declare function call__a1__fn(a1__fn: any, ...a1__arg: any[]): any[];
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
 * @param {...string} a1__name
 * @returns {*}
 */
export declare function andand(obj: any, ...a1__name: any[]): any;
/**
 * Returns a function that calls `andand(obj, ...a1__name)`
 * @param {...string} a1__name
 * @returns {function(*=): *}
 */
export declare function _andand__one(...a1__name: any[]): (obj: any) => any;
export declare function _andand__many(...a1__name: any[]): (obj: any, ...arg_a1: any[]) => any;
export declare const _andand: typeof _andand__one;
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 * @param obj
 * @param {...arg__andand} a1__name
 * @returns {*}
 */
export declare function andand_(obj: any, ...a1__name: any[]): any;
export declare const andand__fn: typeof andand_;
/**
 * Returns a function that calls `andand_(obj, ...a1__name)`
 * @param {...arg__andand} a1__name
 * @returns {function(*=): *}
 */
export declare function _andand_(...a1__name: any[]): (obj: any) => any;
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
export declare function andand__or(obj: any, name_a1: string[], or_fn: (val: any, obj: any) => any): any;
/**
 * Returns function that calls `andand__or(obj, name_a1, or_fn)`
 * @param {string[]} name_a1
 * @param {function(*, *): *} or_fn
 * @returns {function(*=): *}
 */
export declare function _andand__or__one(name_a1: any, or_fn: any): (obj: any) => any;
export declare function _andand__or__many(name_a1: any, or_fn: any): (obj: any, ...arg_a1: any[]) => any;
export declare const _andand__or: typeof _andand__or__one;
/**
 * Returns not applied to the spread of `value_a1__`
 * @param {*|*[]} value_a1__
 * @returns {boolean}
 */
export declare function not(value_a1__: any): boolean;
/**
 * Returns function that calls [not](#not) with [concat__wrap](#concat__wrap)  of the arguments.
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
 * Returns function that calls [notnot](#notnot) with [concat__wrap](#concat__wrap) of the arguments.
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
export declare function _and__left(value_a1__: any): (value: any) => any;
/**
 * Returns function that returns the first falsy from `value` or `value_a1__` or the last value of `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): *}
 */
export declare function _and__right(value_a1__: any): (value: any) => any;
export declare const _and: typeof _and__right;
/**
 * Returns the first falsy or last item function call or value in `value_a1__` .
 * @param {*|*[]} value_a1__
 * @returns {*}
 */
export declare function and__fn(value_a1__: any): any;
/**
 * Returns function that returns the first falsy or last item function call or value in `value_a1__` .
 * @param {*|*[]} value_a1__
 * @returns {function(*=): *}
 */
export declare function _and__fn(value_a1____: any): (value_a1__: any) => any;
/**
 * Returns a function than returns the called a1__fn(value) chained with ands
 * @param a1__fn
 */
export declare function _and__fn__call(a1__fn: {
    (any: any): any;
}[]): (value: any) => boolean;
/**
 * Returns first truthy or last item in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {*}
 */
export declare function or(value_a1__: any): any;
/**
 * Returns function that returns first truthy item in `value_a1__` or value.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): *}
 */
export declare function _or__left(value_a1__: any): (value: any) => any;
/**
 * Returns function that returns first truthy or last item in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {function(*=): *}
 */
export declare function _or__right(value_a1__: any): (value: any) => any;
export declare const _or: typeof _or__right;
/**
 * Returns first truthy or last item call or value in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {*}
 */
export declare function or__fn(value_a1__: any): any;
/**
 * Returns function that returns first truthy or last item call or value in `value_a1__`.
 * @param {*|*[]} value_a1__
 * @returns {*}
 */
export declare function _or__fn(value_a1__: any): (value: any) => any;
export declare const _fn__or__fn: typeof _or__fn;
/**
 * Returns a function than returns first truthy value from a1__fn
 * @param a1__fn
 */
export declare function _or__fn__call(a1__fn: {
    (any: any): any;
}[]): (value: any) => any;
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
 * @param a1__name
 */
export declare function or__in(obj: any, a1__name: any): any;
/**
 * Returns first obj property that is truthy
 * @param obj
 * @param a1__name
 */
export declare function or__property(obj: any, a1__name: any): any;
