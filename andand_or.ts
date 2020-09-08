import { andand } from './andand'
/**
 * Returns `andand(obj, name_a1) || or_fn(obj, val)`
 */
export function andand_or(obj: any, name_a1: string[], or_fn: (val:any, obj:any)=>any) {
	const val = andand(obj, ...name_a1)
	return val || or_fn(val, obj)
}
export const andand__or = andand_or
