import type { LessThan } from './LessThan'
/**
 * @See https://stackoverflow.com/a/70468769/142571
 */
export type NumericRange<
	F extends number,
	T extends number
> = Exclude<T | LessThan<T>, LessThan<F>>
