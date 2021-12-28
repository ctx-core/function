import type { andand_key_T } from './andand.js'
import { andandfn_T } from './andandfn.js'
/**
 * Returns a function that calls `andand_(obj, ...name_a)`
 */
export declare function andandfn_<In extends unknown = unknown, Out extends unknown = unknown>(...name_a: andand_key_T<In>[]): andandfn_T<In, Out>;
export { andandfn_ as _andand_, andandfn_ as _fn__andand__fn, };
