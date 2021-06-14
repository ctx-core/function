import type { wrap_a2_T } from './wrap_a2_T';
export declare type wrap_a2_item_T<I extends unknown = unknown> = wrap_a2_T<I> extends (infer O)[][] ? O : never;
export declare type wrapA2ItemT = wrap_a2_item_T;
