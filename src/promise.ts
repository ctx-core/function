export type promise_resolve_T<T> = (value: T | PromiseLike<T>) => void
export type promise_reject_T = (reason?: any) => void
