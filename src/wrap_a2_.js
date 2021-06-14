import { wrap_a_ } from './wrap_a_';
/**
 * Returns `wrap_a2_T` wrapped as a 2-dimensional array
 */
export function wrap_a2_(a2_nowrap) {
    return wrap_a_(a2_nowrap).map((a_nowrap) => wrap_a_(a_nowrap));
}
export { wrap_a2_ as _wrap_a2, wrap_a2_ as _a2__wrap, };
//# sourceMappingURL=src/wrap_a2_.js.map