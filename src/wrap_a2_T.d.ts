export declare type wrap_a2_T<I extends unknown = unknown> = (I extends unknown[][] ? I : I extends unknown[] ? I[] : I[][]);
export declare type wrap_a2_type = wrap_a2_T;
