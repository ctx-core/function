import { tap } from './tap';
/**
 * Returns function that calls tap with obj.
 */
export function tap_(obj) {
    return (interceptor) => tap(obj, interceptor);
}
export { tap_ as _tap, };
//# sourceMappingURL=src/tap_.js.map