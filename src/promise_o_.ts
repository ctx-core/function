import type { promise_reject_T, promise_resolve_T } from './promise'
export function promise_o_<T>():promise_o_T<T> {
  let resolve:promise_resolve_T<T>|null = null, reject:promise_reject_T|null = null
	const promise = new Promise<T>((in_resolve, in_reject) => {
	  resolve = in_resolve
    reject = in_reject
  })
  return {
    promise,
    resolve: resolve as unknown as promise_resolve_T<T>,
    reject: reject as unknown as promise_reject_T,
  }
}
export interface promise_o_T<T> {
  promise:Promise<T>
  resolve:promise_resolve_T<T>
  reject:promise_reject_T
}
