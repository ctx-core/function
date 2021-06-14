/**
 * Returns `if_fn(conditional)` if `conditional` else `else_fn(conditional)`
 */
export function ifelse(conditional, if_fn, else_fn) {
    return (conditional
        ? if_fn(conditional)
        : else_fn(conditional));
}
//# sourceMappingURL=src/ifelse.js.map