/**
 * Returns function that applies in_arg_a with ...fn_arg_a
 */
export function apply_(fn, in_arg_a = []) {
    return ((...fn_arg_a) => (fn(...[...in_arg_a, ...fn_arg_a])));
}
export { apply_ as _apply, };
//# sourceMappingURL=src/apply_.js.map