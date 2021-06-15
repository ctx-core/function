export function val_<I extends unknown = unknown>(val:I):()=>I {
	return ()=>val
}
export {
	val_ as _val,
}
