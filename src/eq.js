import { wrap_a_ } from './wrap_a_';
/**
 * Returns `==` operator to all values in `a_nowrap`.
 */
export function eq(a_nowrap) {
    const value_a = wrap_a_(a_nowrap);
    let current_value = value_a[0];
    for (let i = 1; i < value_a.length; i++) {
        const value = value_a[i];
        if (current_value != value)
            return false;
    }
    return true;
}
//# sourceMappingURL=src/eq.js.map