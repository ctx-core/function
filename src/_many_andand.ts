import { andand } from './andand'
import type { andand_name_type } from './andand'
export function _many_andand<O = unknown, R = unknown>(...name_a1:andand_name_type<O, R>[]) {
	return (obj:O, ...arg_a1:andand_name_type<O, R>[])=>andand<O, R>(obj, ...arg_a1, ...name_a1)
}
export const _andand__many = _many_andand
