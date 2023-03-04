import type { zip__tuple_a_T } from './zip__tuple_a_T'
/**
 * @See https://stackoverflow.com/a/58939723/142571
 */
export type tuple_a_o_T<
	K extends readonly PropertyKey[],
	V extends readonly any[]
> = {
	[T in zip__tuple_a_T<K, V>[number]as T[0]]: T[1]
}
