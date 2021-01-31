export type promise_resolve_type<T> = (value: T | PromiseLike<T>) => void
export type promise_reject_type = (reason?: any) => void
