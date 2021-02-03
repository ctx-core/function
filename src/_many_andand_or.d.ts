import { andand_or_fn_type } from './andand_or';
import type { andand_name_type } from './andand';
export declare function _many_andand_or<I extends unknown = unknown, O extends unknown = unknown>(name_a1: andand_name_type<I, O>[], or_fn: andand_or_fn_type<I, O>): (obj: I, ...arg_a1: andand_name_type<I, O>[]) => O;
export { _many_andand_or as _andand_or__many, _many_andand_or as _andand__or__many };
