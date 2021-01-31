import type { falsy } from './falsy'
export type maybe<I, F = falsy> = I|F
export type maybe_undefined<I> = maybe<I, undefined>
export type maybe_null<I> = maybe<I, null>
