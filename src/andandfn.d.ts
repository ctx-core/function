import type { andand_key_T } from './andand';
/**
 * Applies `&&` to a chain of property name or function with return value from `obj`.
 */
export declare function andandfn<Val extends unknown = unknown, Out extends unknown = unknown>(obj: Val, ...name_a: andand_key_T<Val>[]): Out;
export declare type andandfn_T</*@formatter:off*/ In extends unknown = unknown, Out extends unknown = unknown> = (obj: In) => Out;
export { andandfn as andand__fn, };
