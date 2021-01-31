import type { andand_name_type } from './andand';
export declare function _many_andand<O = unknown, R = unknown>(...name_a1: andand_name_type<O, R>[]): (obj: O, ...arg_a1: andand_name_type<O, R>[]) => O | R;
export declare const _andand__many: typeof _many_andand;
