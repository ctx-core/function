import { wrap_a_ } from './wrap_a_.js'
/**
 * Returns `wrap_aa_T` wrapped as a 2-dimensional array
 */ export function wrap_aa_(aa_nowrap) {
	return wrap_a_(aa_nowrap).map((a_nowrap)=>wrap_a_(a_nowrap)
	)
}
export { wrap_aa_ as wrap_a2_, wrap_aa_ as _wrap_a2, wrap_aa_ as _a2__wrap, }
//# sourceMappingURL=wrap_aa_.js.map