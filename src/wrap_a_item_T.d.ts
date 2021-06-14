import type { wrap_a_T } from './wrap_a_T';
export declare type wrap_a_item_T<I extends unknown = unknown> = wrap_a_T<I> extends (infer O)[][] ? O : never;
export declare type wrap_a1_item_type = wrap_a_item_T;
