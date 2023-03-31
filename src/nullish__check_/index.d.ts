import type { nullish } from '../_types'
export function nullish__check_<
	T extends any[], U
>(
	$:T,
	_:(...$:T)=>U,
	onnullish?:(nullish:nullish)=>any
):U
