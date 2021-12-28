import { andand } from './andand.js'
export function many_andand_(...name_a) {
	return (obj, ...arg_a)=>andand(obj, ...arg_a, ...name_a)

}
export { many_andand_ as _many_andand, many_andand_ as _andand__many, }
//# sourceMappingURL=many_andand_.js.map