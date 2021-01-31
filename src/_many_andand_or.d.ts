import { andand_or_fn_type } from './andand_or';
import type { andand_name_type } from './andand';
export declare function _many_andand_or<O = unknown, R = unknown>(name_a1: andand_name_type<O, R>[], or_fn: andand_or_fn_type<O, R>): (obj: O, ...arg_a1: andand_name_type<O, R>[]) => O | R;
export declare const _andand_or__many: typeof _many_andand_or;
export declare const _andand__or__many: typeof _many_andand_or;
