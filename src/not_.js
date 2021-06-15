import { not } from './not';
import { wrap_concat } from './wrap_concat';
/**
 * Returns function that calls [not](#not) with [wrap_concat](#wrap_concat)  of the arguments.
 */
export function not_(a_unwrap) {
    return (val_a) => not(wrap_concat(a_unwrap, val_a));
}
export { not_ as _not, };
//# sourceMappingURL=src/not_.js.map