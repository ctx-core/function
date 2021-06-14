/**
 * Applies `&&` to a chain of properties from `obj`.
 */
export function andand(obj, ...name_a) {
    let out_value = obj;
    for (let i = 0; i < name_a.length; i++) {
        const segment = name_a[i];
        return (out_value
            ? typeof segment === 'function'
                ? out_value[segment(out_value)]
                : out_value[segment]
            : null);
        // const in_value = (out_value && out_value[segment])
        // out_value =
        // 	in_value
        // 	|| (typeof segment === 'function'
        // 			? segment(out_value)
        // 			: in_value)
    }
    return out_value;
}
//# sourceMappingURL=src/andand.js.map