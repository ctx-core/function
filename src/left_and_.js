import { and } from './and';
import { wrap_concat } from './wrap_concat';
/**
 * Returns function that returns the first falsy in `a_unwrap` or `value`.
 */
export function left_and_(a_unwrap) {
    return (value) => and(wrap_concat(a_unwrap, value));
}
export { left_and_ as _left_and, left_and_ as _and__left, };
//# sourceMappingURL=src/left_and_.js.map