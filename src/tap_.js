/**
 * Returns function that calls tap with obj.
 */ export function tap_(fn) {
	return (obj)=>{
		fn(obj)
		return obj
	}
}
export { tap_ as _tap, }
//# sourceMappingURL=tap_.js.map