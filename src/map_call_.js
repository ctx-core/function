import { concat } from './concat.js'
import { map_call } from './map_call.js'
/**
 * Returns function that maps calls to fn_al ...fac_arg_a concat with ...fn_arg_a passed to function
 */ export function map_call_(fn_a, ...fac_arg_a) {
	return (...fn_arg_a)=>map_call(fn_a, ...concat(fac_arg_a, fn_arg_a))

}
export { map_call_ as map_a_call_fn, map_call_ as map_a1_call_fn, map_call_ as _map_call, map_call_ as _call__map, }
