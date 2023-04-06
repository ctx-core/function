import type { falsy } from '../_types'
export function falsy__check_<
	T extends any[], U
>(
	$:T,
	_:(...$:T)=>U,
	onfalsy?:(falsy:falsy)=>any
):U
