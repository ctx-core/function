import { andand } from './andand'
export function _many_andand(...name_a1) {
	return (obj, ...arg_a1)=>andand(obj, ...arg_a1, ...name_a1)
}
export const _andand__many = _many_andand
