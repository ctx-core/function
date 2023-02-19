import type { nullish } from '../_types'
export declare function nullish__guard<
	Val extends unknown = unknown
>(
	label:string, ...fn_a:(()=>(nullish|Val))[]
):Val|nullish
export {
	nullish__guard as nullish_guard,
	nullish__guard as nullsy_guard,
}
