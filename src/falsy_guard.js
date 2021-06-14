export function falsy_guard(label, ...fns) {
    for (const fn of fns) {
        const rv = fn();
        if (rv)
            return rv;
    }
    throw `${label} cannot be falsy`;
}
export { falsy_guard as falsish_guard };
//# sourceMappingURL=src/falsy_guard.js.map