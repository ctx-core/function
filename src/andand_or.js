import { andand } from './andand';
/**
 * Returns `andand(obj, name_a) || or_fn(obj, val)`
 */
export function andand_or(/*@formatter:on*/ obj, name_a, or_fn) {
    const val = andand(obj, ...name_a);
    return val || or_fn(val, obj);
}
export { andand_or as andand__or };
//# sourceMappingURL=src/andand_or.js.map