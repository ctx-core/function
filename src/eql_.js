import { eql } from './eql';
import { wrap_concat } from './wrap_concat';
/**
 * Returns function that returns `===` operator to all values in `in_value_a`.
 */
export function eql_(in_value_a) {
    return (val) => eql(wrap_concat(in_value_a, val));
}
export { eql_ as _eql, };
//# sourceMappingURL=src/eql_.js.map