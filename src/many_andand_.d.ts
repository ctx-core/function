import { andand_key_fn_T } from './andand';
export declare function many_andand_<Val extends unknown = unknown>(...name_a: (keyof Val | andand_key_fn_T<Val>)[]): (obj: Val, ...arg_a: (keyof Val | andand_key_fn_T<Val>)[]) => unknown;
export { many_andand_ as _many_andand, many_andand_ as _andand__many, };
