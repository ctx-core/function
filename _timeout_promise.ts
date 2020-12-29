/**
 * @see [link: https://italonascimento.github.io/applying-a-timeout-to-your-promises/]
 * @see [link: http://disq.us/p/1k8w63m]
 */
export function _timeout_promise<O extends unknown = unknown>(ms: number, promise: Promise<O>): Promise<O> {
  let id
  let timeout = new Promise((_resolve, reject) => {
    id = setTimeout(() => {
      reject(`Timed out in ${ms}ms.`)
    }, ms)
  })
  return Promise.race([
    promise,
    timeout
  ]).then((result) => {
    clearTimeout(id)
    return result as O
  })
}
