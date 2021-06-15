import { notnot } from './notnot';
import { wrap_concat } from './wrap_concat';
/**
 * Returns function that calls [notnot](#notnot) with [wrap_concat](#wrap_concat) of the arguments.
 */
export function notnot_(in_value_a) {
    return (val) => notnot(wrap_concat(in_value_a, val));
}
export { notnot_ as _notnot, };
//# sourceMappingURL=src/notnot_.js.map