export function _val<I extends unknown = unknown>(val:I) {
	return ()=>val
}
