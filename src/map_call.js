/**
 * Returns the map of calls to fn_a with ...arg_a.
 */
export function map_call(fn_a, ...arg_a) {
    return fn_a.map(fn => fn(...arg_a));
}
export { map_call as call__map };
//# sourceMappingURL=src/map_call.js.map