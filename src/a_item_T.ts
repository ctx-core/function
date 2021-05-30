// See https://dev.to/aexol/typescript-tutorial-infer-keyword-2cn - FlattenIfArray
export type a_item_T<I extends unknown = unknown> = I extends (infer O)[] ? O : I
export type a1_item_type<I extends unknown = unknown> = a_item_T<I>
export type a1_item_T<I extends unknown = unknown> = a_item_T<I>
