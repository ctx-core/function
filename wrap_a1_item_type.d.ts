import type { wrap_a1_type } from './wrap_a1_type';
export declare type wrap_a1_item_type<I extends unknown> = wrap_a1_type<I> extends (infer O)[][] ? O : never;
