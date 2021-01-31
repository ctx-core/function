/**
 * Returns a function than returns the called fn_a1(value) chained with ands
 */
export declare function _and_fn_call</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown>(fn_a1: ((in_value: I) => O)[]): and_fn_call_type<I, O>;
export declare type and_fn_call_type</*@formatter:off*/ I extends unknown = unknown, O extends unknown = unknown> = (in_value: I) => O | null;
export { _and_fn_call as _and__fn__call };
