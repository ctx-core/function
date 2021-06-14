import { call } from './call';
/**
 * Returns function that calls ...in_arg_a concat with ...fn_arg_a passed to function
 */
export function call_(/*@formatter:on*/ fn, ...in_arg_a) {
    return (...fn_arg_a) => call(fn, ...[...in_arg_a, ...fn_arg_a]);
}
export { call_ as _call, };
//# sourceMappingURL=src/call_.js.map