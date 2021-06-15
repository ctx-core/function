import { neq } from './neq';
import { wrap_concat } from './wrap_concat';
/**
 * Return function that Returns `!=` operator to all values in `in_value_a`.
 */
export function neq_(in_value_a) {
    return (val_a) => neq(wrap_concat(in_value_a, val_a));
}
export { neq_ as _neq, };
//# sourceMappingURL=src/neq_.js.map