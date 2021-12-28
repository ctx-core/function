/**
 * Returns a function where the first `count` arguments are sent to the wrapped function.
 */
import { slice_arg_a_ } from './slice_arg_a_.js'
export function head_arg_a_(fn, count = 1) {
	return slice_arg_a_(fn, 0, count)
}
export { head_arg_a_ as head_arg_a1_fn, head_arg_a_ as _head_arg_a1, head_arg_a_ as _arg_a1__head }
//# sourceMappingURL=head_arg_a_.js.map