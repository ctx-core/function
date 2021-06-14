import { concat } from './concat';
import { wrap_a_ } from './wrap_a_';
import { wrap_a2_ } from './wrap_a2_';
/**
 * [wrap](#wrap) `a_unwrap` & [concat](#concat) `rest_a`
 */
export function wrap_concat(a_unwrap, ...rest_a) {
    return concat(wrap_a_(a_unwrap), ...wrap_a2_(rest_a));
}
export { wrap_concat as concat__wrap };
//# sourceMappingURL=src/wrap_concat.js.map