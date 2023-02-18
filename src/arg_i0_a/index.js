import { slice_arg_spread_a_ } from '../slice_arg_spread_a_/index.js'
/** @typedef {import('../slice_arg_spread_a_').slice_arg_spread_a__arg__T}slice_arg_spread_a__arg__T */
/**
 * Returns a function that calls fn passing only the first argument.
 * @param fn{slice_arg_spread_a__arg__T}
 * @returns {(function(...[*]): *)|*}
 */
export function arg_i0_a(fn) {
	return slice_arg_spread_a_(fn, 0, 1)
}
export { arg_i0_a as arg__0__ }
