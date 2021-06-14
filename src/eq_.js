import { eq } from './eq';
import { wrap_concat } from './wrap_concat';
/**
 * Returns function that returns `==` operator to all values in `in_value_aS`.
 */
export function eq_(a_nowrap) {
    return (value) => eq(wrap_concat(a_nowrap, value));
}
export { eq_ as _eq, eq_ as _fn__eq, };
//# sourceMappingURL=src/eq_.js.map