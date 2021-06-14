/**
 * Returns array with the index as each item.
 */
export function times(num, fn) {
    const a = [];
    for (let idx = 0; idx < num; idx++) {
        a.push(fn(idx));
    }
    return a;
}
//# sourceMappingURL=src/times.js.map