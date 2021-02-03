import type { andand_name_type } from './andand';
export declare function _many_andand<I extends unknown = unknown, O extends unknown = unknown>(...name_a1: andand_name_type<I, O>[]): (obj: I, ...arg_a1: andand_name_type<I, O>[]) => O;
export { _many_andand as _andand__many };
