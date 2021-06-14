export async function nullish_async_guard(label, ...fns) {
    for (const fn of fns) {
        const rv = await fn();
        if (rv != null)
            return rv;
    }
    throw `${label} cannot be nullish`;
}
export { nullish_async_guard as nullsy_async_guard };
//# sourceMappingURL=src/nullish_async_guard.js.map